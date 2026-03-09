import prisma from '../config/database';
import { AppError } from '../utils/AppError';
import { Prisma } from '../generated/prisma/client';
import { generateDiagnosisCode } from '../utils/diagnosisCode';

export async function createDiagnosis(
    doctorId: string,
    data: Omit<Prisma.DiagnosisUncheckedCreateInput, 'id' | 'createdAt' | 'patientId' | 'doctorId' | 'diagnosis_code' | 'cancer_type' | 'sex'>,
    patientId?: string
) {
    // 1. Verify patient belongs to doctor (if provided)
    if (patientId) {
        const patient = await prisma.patient.findFirst({
            where: {
                id: patientId,
                doctorId: doctorId
            }
        });

        if (!patient) {
            throw new AppError(404, 'Patient not found or you do not have permission to access this patient');
        }
    }

    // 2. Generate sequential diagnosis code for this doctor
    const diagnosisCode = await generateDiagnosisCode(doctorId);

    // 3. Insert diagnosis
    const diagnosis = await prisma.diagnosis.create({
        data: {
            ...data,
            diagnosis_code: diagnosisCode,
            patientId: patientId || null,
            doctorId,
            // These defaults match the PRD specs
            cancer_type: "Breast Cancer",
            sex: "Female"
            // patient_vital_status starts as null until predicted
        }
    });

    return diagnosis;
}

export async function getAllDiagnoses(doctorId: string) {
    return await prisma.diagnosis.findMany({
        where: {
            doctorId
        },
        include: {
            patient: {
                select: {
                    name: true,
                    patient_code: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export async function predictDiagnosis(doctorId: string, diagnosisId: string, patientId: string) {
    // 1. Verify diagnosis ownership and existence
    const diagnosis = await prisma.diagnosis.findFirst({
        where: {
            id: diagnosisId,
            doctorId
        }
    });

    if (!diagnosis) {
        throw new AppError(404, 'Diagnosis not found or you do not have permission.');
    }

    // 2. Verify patient belongs to doctor
    const patient = await prisma.patient.findFirst({
        where: {
            id: patientId,
            doctorId
        }
    });

    if (!patient) {
        throw new AppError(404, 'Target patient not found or you do not have permission.');
    }

    // 3. Simulate prediction by linking patient and updating vital status
    const updated = await prisma.diagnosis.update({
        where: { id: diagnosisId },
        data: {
            patientId: patientId,
            patient_vital_status: "Living"
        }
    });

    return updated;
}
