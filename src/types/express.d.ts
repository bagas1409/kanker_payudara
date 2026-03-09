// Extend Express Request to include doctorId from JWT
declare namespace Express {
    interface Request {
        doctorId?: string;
    }
}
