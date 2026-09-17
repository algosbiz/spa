<#
.SYNOPSIS
    Push to main, wait until Vercel is really serving the new build, then purge
    the Cloudflare cache.

.DESCRIPTION
    Cloudflare fronts this site with a two-hour cache, so a Vercel deploy stays
    invisible to visitors until the zone is purged -- and purging while Vercel
    is still building just refills the edge from the old origin. This script is
    that order, enforced.

    "The build is live" is measured, not waited out. Next stamps a per-build
    buildId into every page's __NEXT_DATA__, so the script notes the buildId the
    site serves now, pushes, and then polls a cache-busted URL (a unique query
    string is its own Cloudflare cache key, so it misses the edge and reaches
    Vercel) until that buildId changes. A build that never goes live means no
    purge and a non-zero exit, which is the safe way to fail: a stale edge beats
    an edge refilled from the old origin.

    Afterwards it re-checks the site *through* Cloudflare, because a purge API
    call returning success is not proof that the edge dropped anything.

.EXAMPLE
    .\deploy.ps1
    Push what is already committed, wait for it to go live, purge.

.EXAMPLE
    .\deploy.ps1 -Message "fix pricelist heading"
    Stage every change, commit it with that message, then the same.

.EXAMPLE
    .\deploy.ps1 -CheckOnly
    Print what the site is serving right now and exit. Touches nothing.

.EXAMPLE
    .\deploy.ps1 -PurgeOnly
    Skip git and purge now -- for a deploy that already went live.
#>
[CmdletBinding()]
param(
    # Commit every pending change with this message before pushing. Without it
    # the working tree is left alone and only existing commits are pushed.
    [string]$Message,

    # How long to wait for the new build to start serving before giving up.
    [int]$TimeoutMinutes = 15,

    [int]$PollSeconds = 10,

    # Vercel flips its production alias per region, not everywhere at once. A
    # short pause after the first region answers with the new buildId keeps the
    # purge from landing while another region still serves the old one.
    [int]$SettleSeconds = 15,

    # Pages re-checked through Cloudflare once the purge is done.
    [string[]]$VerifyPaths = @('/', '/seminyak/'),

    # Purge now; no commit, no push, no waiting.
    [switch]$PurgeOnly,

    # Report what is live and exit. Read-only.
    [switch]$CheckOnly,

    # Push and wait, but leave the cache alone.
    [switch]$SkipPurge,

    # Allow a branch other than main (Vercel builds a preview from it, so the
    # production buildId never changes and the wait would time out).
    [switch]$Force,

    # Answer the uncommitted-changes prompt with yes.
    [switch]$Yes
)

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $RepoRoot

# A bare PowerShell user agent is the kind of thing a bot-fight rule blocks;
# this is a deploy check, not a crawl.
$UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) spabalimoon-deploy/1.0'

function Write-Step([string]$Text) { Write-Host "`n==> $Text" -ForegroundColor Cyan }
function Write-Ok([string]$Text)   { Write-Host "    $Text" -ForegroundColor Green }
function Write-Warn([string]$Text) { Write-Host "    $Text" -ForegroundColor Yellow }
function Write-Bad([string]$Text)  { Write-Host "    $Text" -ForegroundColor Red }

# Read the site URL from the same place scripts/purge-cloudflare.mjs reads it,
# so the two cannot drift apart.
function Get-SiteUrl {
    $envFile = Join-Path $RepoRoot '.env.local'
    if (Test-Path $envFile) {
        foreach ($line in (Get-Content $envFile)) {
            if ($line.Trim() -match '^NEXT_PUBLIC_SITE_URL\s*=\s*(.+)$') {
                return $Matches[1].Trim().TrimEnd('/')
            }
        }
    }
    return 'https://spabalimoon.com'
}

$SiteUrl = Get-SiteUrl

function Get-Header($Response, [string]$Name) {
    foreach ($key in $Response.Headers.Keys) {
        if ($key -ieq $Name) { return $Response.Headers[$key] }
    }
    return ''
}

function Get-BuildIdFrom([string]$Html) {
    $m = [regex]::Match($Html, '"buildId":"([^"]+)"')
    if ($m.Success) { return $m.Groups[1].Value }
    return ''
}

# Ask the origin, not the edge.
function Get-LiveBuildId {
    $bust = [guid]::NewGuid().ToString('N')
    try {
        $res = Invoke-WebRequest -Uri "$SiteUrl/?deploycheck=$bust" -UseBasicParsing `
            -TimeoutSec 30 -UserAgent $UserAgent -Headers @{ 'Cache-Control' = 'no-cache' }
    } catch {
        return ''
    }
    return (Get-BuildIdFrom $res.Content)
}

# Ask the edge, deliberately: this is what a visitor gets.
function Get-EdgeStatus([string]$Path) {
    try {
        $res = Invoke-WebRequest -Uri ($SiteUrl + $Path) -UseBasicParsing -TimeoutSec 30 -UserAgent $UserAgent
    } catch {
        return [pscustomobject]@{ Path = $Path; Cf = 'ERROR'; Age = ''; BuildId = ''; Error = $_.Exception.Message }
    }
    return [pscustomobject]@{
        Path    = $Path
        Cf      = (Get-Header $res 'cf-cache-status')
        Age     = (Get-Header $res 'Age')
        BuildId = (Get-BuildIdFrom $res.Content)
        Error   = ''
    }
}

function Format-Status($Status) {
    return ('{0,-14} cf-cache-status: {1,-8} Age: {2,-7} buildId: {3}' -f `
        $Status.Path, $Status.Cf, $Status.Age, $Status.BuildId)
}

# git writes ordinary progress to stderr. Redirecting that in Windows
# PowerShell wraps each line in a NativeCommandError, which $ErrorActionPreference
# = 'Stop' then turns into a failure -- so stderr is left alone and the exit code
# is what decides whether the call worked.
function Invoke-Git([string[]]$GitArgs) {
    $out = & git @GitArgs
    if ($LASTEXITCODE -ne 0) { throw "git $($GitArgs -join ' ') failed (exit $LASTEXITCODE)" }
    return $out
}

function Invoke-Purge {
    Write-Step 'Purging the Cloudflare zone'
    & node (Join-Path $RepoRoot 'scripts\purge-cloudflare.mjs')
    if ($LASTEXITCODE -ne 0) {
        Write-Bad 'Purge failed. The new build is live but the edge still serves the old one.'
        exit 1
    }
}

function Confirm-Verification([string]$ExpectedBuildId) {
    Write-Step 'Verifying through Cloudflare'
    $stale = @()
    foreach ($path in $VerifyPaths) {
        $status = Get-EdgeStatus $path
        if ($status.Cf -eq 'ERROR') {
            Write-Bad "$($status.Path) -> $($status.Error)"
            $stale += $status.Path
        } elseif ($ExpectedBuildId -and $status.BuildId -and $status.BuildId -ne $ExpectedBuildId) {
            Write-Bad (Format-Status $status)
            $stale += $status.Path
        } else {
            Write-Ok (Format-Status $status)
        }
    }
    if ($stale.Count -gt 0) {
        Write-Bad "Still serving an old build: $($stale -join ', ')"
        Write-Warn 'The purge itself reported success, so look at the Cache Rules, not the token.'
        exit 1
    }
    Write-Ok 'Every checked page is serving the new build.'
}

# ---------------------------------------------------------------------------

if ($CheckOnly) {
    Write-Step 'What is live right now'
    $live = Get-LiveBuildId
    if (-not $live) { Write-Bad 'Could not read a buildId from the origin.'; exit 1 }
    Write-Ok "origin buildId: $live"
    foreach ($path in $VerifyPaths) { Write-Ok (Format-Status (Get-EdgeStatus $path)) }
    exit 0
}

if ($PurgeOnly) {
    $live = Get-LiveBuildId
    Invoke-Purge
    Confirm-Verification $live
    exit 0
}

# --- git -------------------------------------------------------------------

$branch = (Invoke-Git @('rev-parse', '--abbrev-ref', 'HEAD')).Trim()
if ($branch -ne 'main' -and -not $Force) {
    Write-Bad "On branch '$branch'. Vercel builds production from main, so this would deploy"
    Write-Bad 'a preview and the wait below would time out. Use -Force to override.'
    exit 1
}

if ($Message) {
    Write-Step 'Committing'
    Invoke-Git @('add', '-A')
    $staged = Invoke-Git @('diff', '--cached', '--name-only')
    if (-not $staged) {
        Write-Warn 'Nothing to commit; continuing with the commits already made.'
    } else {
        & git commit -m $Message
        if ($LASTEXITCODE -ne 0) { throw "git commit failed (exit $LASTEXITCODE)" }
    }
}

$dirty = Invoke-Git @('status', '--porcelain')
if ($dirty) {
    Write-Warn 'Uncommitted changes will NOT be deployed:'
    $dirty | Select-Object -First 10 | ForEach-Object { Write-Warn "  $_" }
    if (-not $Yes) {
        $answer = Read-Host '    Push anyway? [y/N]'
        if ($answer -notmatch '^[Yy]') { Write-Bad 'Aborted.'; exit 1 }
    }
}

Write-Step 'Pushing'
Invoke-Git @('fetch', '--quiet', 'origin', $branch)
$ahead = [int]((Invoke-Git @('rev-list', '--count', '@{u}..HEAD')) | Out-String).Trim()
if ($ahead -eq 0) {
    Write-Bad 'Nothing to push, so Vercel will not build and there is nothing to wait for.'
    Write-Warn 'Use -PurgeOnly if the deploy already went live and only the purge is missing.'
    exit 1
}

$buildIdBefore = Get-LiveBuildId
if (-not $buildIdBefore) {
    Write-Bad 'Could not read the current buildId from the site, so there is no way to tell when'
    Write-Bad 'the new build takes over. Check that the site is up, then retry.'
    exit 1
}
Write-Ok "buildId before deploy: $buildIdBefore"
Write-Ok "pushing $ahead commit(s) to origin/$branch"
Invoke-Git @('push', 'origin', $branch)

# --- wait ------------------------------------------------------------------

Write-Step "Waiting for Vercel to serve a new build (timeout ${TimeoutMinutes}m)"
$started = Get-Date
$deadline = $started.AddMinutes($TimeoutMinutes)
$buildIdAfter = ''

while ((Get-Date) -lt $deadline) {
    Start-Sleep -Seconds $PollSeconds
    $current = Get-LiveBuildId
    $elapsed = [int]((Get-Date) - $started).TotalSeconds
    if ($current -and $current -ne $buildIdBefore) {
        $buildIdAfter = $current
        Write-Ok "live after ${elapsed}s: $buildIdAfter"
        break
    }
    $shown = $current
    if (-not $shown) { $shown = '(no answer)' }
    Write-Host ('    {0,4}s  still {1}' -f $elapsed, $shown) -ForegroundColor DarkGray
}

if (-not $buildIdAfter) {
    Write-Bad "No new build within ${TimeoutMinutes}m, so nothing was purged."
    Write-Warn 'Purging now would only refill the edge from the old origin. Check the Vercel'
    Write-Warn 'dashboard for a failed build, then rerun with -PurgeOnly once it is serving.'
    exit 1
}

if ($SettleSeconds -gt 0) {
    Write-Ok "letting the alias settle for ${SettleSeconds}s before purging"
    Start-Sleep -Seconds $SettleSeconds
}

# --- purge -----------------------------------------------------------------

if ($SkipPurge) {
    Write-Warn 'Skipping the purge as asked; visitors keep the old page for up to two hours.'
    exit 0
}

Invoke-Purge
Confirm-Verification $buildIdAfter
