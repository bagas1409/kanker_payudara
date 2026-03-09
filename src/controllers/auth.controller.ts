import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/auth.service';
import { sendSuccess } from '../utils/response';

export async function register(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ status: 'error', message: 'name, email, and password are required' });
            return;
        }

        const doctor = await authService.register({ name, email, password });
        sendSuccess(res, doctor, 'Doctor registered successfully', 201);
    } catch (err) {
        next(err);
    }
}

export async function login(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ status: 'error', message: 'email and password are required' });
            return;
        }

        const result = await authService.login({ email, password });
        sendSuccess(res, result, 'Login successful');
    } catch (err) {
        next(err);
    }
}
