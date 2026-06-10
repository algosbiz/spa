import { getIronSession } from 'iron-session';

export const sessionOptions = {
    password: process.env.SESSION_SECRET || 'dev-only-insecure-secret-change-me-please-32',
    cookieName: 'sbm_admin_session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
    },
};

// Read (or create) the iron-session for a given request/response pair.
export async function getSession(req, res) {
    return getIronSession(req, res, sessionOptions);
}

// Wrap an API route handler so it only runs for an authenticated admin.
export function requireAdmin(handler) {
    return async (req, res) => {
        const session = await getSession(req, res);
        if (!session.isAdmin) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        return handler(req, res, session);
    };
}
