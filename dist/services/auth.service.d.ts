export interface RegisterDTO {
    name: string;
    email: string;
    password: string;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export declare function register(dto: RegisterDTO): Promise<{
    id: string;
    email: string;
    name: string;
    role: import("../generated/prisma/enums").Role;
    createdAt: Date;
}>;
export declare function login(dto: LoginDTO): Promise<{
    token: string;
    doctor: {
        id: string;
        name: string;
        email: string;
        role: import("../generated/prisma/enums").Role;
    };
}>;
//# sourceMappingURL=auth.service.d.ts.map