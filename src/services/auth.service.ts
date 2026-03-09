import bcrypt from 'bcrypt';
import prisma from '../config/database';
import { signToken } from '../utils/jwt';
import { AppError } from '../utils/AppError';

const SALT_ROUNDS = 10;

export interface RegisterDTO {
    name: string;
    email: string;
    password: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export async function register(dto: RegisterDTO) {
    const existing = await prisma.doctor.findUnique({
        where: { email: dto.email },
    });

    if (existing) {
        throw new AppError(409, 'Email already registered');
    }

    const hashedPassword = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const doctor = await prisma.doctor.create({
        data: {
            name: dto.name,
            email: dto.email,
            password: hashedPassword,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });

    return doctor;
}

export async function login(dto: LoginDTO) {
    const doctor = await prisma.doctor.findUnique({
        where: { email: dto.email },
    });

    if (!doctor) {
        throw new AppError(401, 'Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, doctor.password);

    if (!isPasswordValid) {
        throw new AppError(401, 'Invalid email or password');
    }

    const token = signToken({ doctorId: doctor.id, role: doctor.role });

    return {
        token,
        doctor: {
            id: doctor.id,
            name: doctor.name,
            email: doctor.email,
            role: doctor.role,
        },
    };
}
