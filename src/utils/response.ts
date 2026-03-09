import { Response } from 'express';

interface SuccessPayload<T> {
    status: 'success';
    message?: string;
    data: T;
}

interface ErrorPayload {
    status: 'error';
    message: string;
}

export function sendSuccess<T>(
    res: Response,
    data: T,
    message?: string,
    statusCode = 200,
): Response {
    const payload: SuccessPayload<T> = { status: 'success', data };
    if (message) payload.message = message;
    return res.status(statusCode).json(payload);
}

export function sendError(
    res: Response,
    message: string,
    statusCode = 500,
): Response {
    const payload: ErrorPayload = { status: 'error', message };
    return res.status(statusCode).json(payload);
}
