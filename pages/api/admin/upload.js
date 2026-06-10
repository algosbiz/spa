import { requireAdmin } from '@/lib/session';
import { supabaseAdmin, STORAGE_BUCKET } from '@/lib/supabase';

// We read the raw request body ourselves, so disable Next's JSON body parser.
export const config = { api: { bodyParser: false } };

function readRawBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
    });
}

async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const contentType = req.headers['content-type'] || '';
    if (!contentType.startsWith('image/')) {
        return res.status(400).json({ error: 'File must be an image.' });
    }

    const buffer = await readRawBody(req);
    if (!buffer.length) return res.status(400).json({ error: 'File is empty.' });
    if (buffer.length > 5 * 1024 * 1024) {
        return res.status(400).json({ error: 'Image must be 5MB or smaller.' });
    }

    // Build a safe, unique storage path: blog/<timestamp>-<name>.<ext>
    const ext = (contentType.split('/')[1] || 'jpg').split('+')[0];
    const rawName = (req.headers['x-filename'] || 'image').toString();
    const safeName =
        rawName
            .replace(/\.[^.]+$/, '')
            .replace(/[^a-z0-9-_]/gi, '-')
            .toLowerCase()
            .slice(0, 40) || 'image';
    const path = `blog/${Date.now()}-${safeName}.${ext}`;

    const { error } = await supabaseAdmin.storage
        .from(STORAGE_BUCKET)
        .upload(path, buffer, { contentType, upsert: false });

    if (error) return res.status(500).json({ error: error.message });

    const { data } = supabaseAdmin.storage.from(STORAGE_BUCKET).getPublicUrl(path);
    return res.status(200).json({ url: data.publicUrl, path });
}

export default requireAdmin(handler);
