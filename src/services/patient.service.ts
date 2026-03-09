import { Prisma } from '../generated/prisma/client';
import prisma from '../config/database';
import { AppError } from '../utils/AppError';
import { generateNextCode } from '../utils/patientCode';


export interface CreatePatientDTO {
    name: string;
    age: number;
    address: string;
}

export interface UpdatePatientDTO {
    name?: string;
    age?: number;
    address?: string;
}

export async function createPatient(doctorId: string, dto: CreatePatientDTO) {
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {

        // Run inside transaction to avoid race condition on code generation
        const lastPatient = await tx.patient.findFirst({
            where: { doctorId },
            orderBy: { createdAt: 'desc' },
            select: { patient_code: true },
        });

        const patientCode = lastPatient
            ? generateNextCode(lastPatient.patient_code)
            : 'py-001';

        return await tx.patient.create({
            data: {
                ...dto,
                patient_code: patientCode,
                doctorId,
            },
        });
    });
}

export async function getPatients(doctorId: string) {
    return await prisma.patient.findMany({
        where: { doctorId },
        orderBy: { createdAt: 'asc' },
    });
}

export async function getPatientById(id: string, doctorId: string) {
    const patient = await prisma.patient.findUnique({ where: { id } });

    if (!patient) {
        throw new AppError(404, 'Patient not found');
    }

    if (patient.doctorId !== doctorId) {
        throw new AppError(403, 'Forbidden: not your patient');
    }

    return patient;
}

export async function updatePatient(
    id: string,
    doctorId: string,
    dto: UpdatePatientDTO,
) {
    // Ownership check first
    await getPatientById(id, doctorId);

    return await prisma.patient.update({
        where: { id },
        data: dto,
    });
}

export async function deletePatient(id: string, doctorId: string) {
    // Ownership check first
    await getPatientById(id, doctorId);

    await prisma.patient.delete({ where: { id } });
}
