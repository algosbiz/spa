import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSession } from '@/lib/session';

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');
            router.push('/admin');
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Admin Login</title>
                <meta name="robots" content="noindex" />
            </Head>
            <div className="login-wrap">
                <form className="login-card" onSubmit={submit}>
                    <h1>Admin Blog</h1>
                    <p className="sub">Sign in to manage articles.</p>
                    {error && <div className="err">{error}</div>}
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter admin password"
                        autoFocus
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Processing…' : 'Sign In'}
                    </button>
                </form>
            </div>

            <style jsx>{`
                .login-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f0ebe1; font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; }
                .login-card { background: #fff; padding: 36px 32px; border-radius: 14px; width: 100%; max-width: 380px; border: 1px solid #e5ddd0; box-shadow: 0 10px 40px rgba(0,0,0,.06); }
                h1 { margin: 0 0 4px; font-size: 22px; color: #2f281e; }
                .sub { margin: 0 0 22px; color: #8b7d6b; font-size: 14px; }
                label { display: block; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; color: #8b7d6b; margin-bottom: 6px; }
                input { width: 100%; padding: 11px 13px; border: 1px solid #d9d2c5; border-radius: 8px; font-size: 14px; margin-bottom: 18px; }
                input:focus { outline: none; border-color: #b8952e; }
                button { width: 100%; padding: 12px; background: #b8952e; color: #fff; border: none; border-radius: 8px; font-size: 15px; font-weight: 500; cursor: pointer; }
                button:hover { background: #a5841f; }
                button:disabled { opacity: .6; cursor: not-allowed; }
                .err { background: #fdecea; color: #b3261e; border: 1px solid #f5c6c0; padding: 9px 12px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
            `}</style>
        </>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getSession(req, res);
    if (session.isAdmin) {
        return { redirect: { destination: '/admin', permanent: false } };
    }
    return { props: {} };
}
