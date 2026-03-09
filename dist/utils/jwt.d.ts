export interface JWTPayload {
    doctorId: string;
    role: string;
}
export declare function signToken(payload: JWTPayload): string;
export declare function verifyToken(token: string): JWTPayload;
//# sourceMappingURL=jwt.d.ts.map