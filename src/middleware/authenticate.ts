import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export async function authenticate(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ status: 'error', message: 'No token provided' });
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = verifyToken(token);
        req.doctorId = payload.doctorId;
        next();
    } catch {
        res.status(401).json({ status: 'error', message: 'Invalid or expired token' });
    }
}
