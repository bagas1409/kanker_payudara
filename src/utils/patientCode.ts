import prisma from '../config/database';

/**
 * Generates the next patient code for a specific doctor.
 * Format: py-001, py-002, py-003, ...
 * The counter resets per doctor (each doctor has their own sequence).
 * Run inside a Prisma transaction for race-condition safety.
 */
export function generateNextCode(lastCode: string): string {
    const num = parseInt(lastCode.split('-')[1], 10);
    return `py-${String(num + 1).padStart(3, '0')}`;
}

export async function generatePatientCode(doctorId: string): Promise<string> {
    const lastPatient = await prisma.patient.findFirst({
        where: { doctorId },
        orderBy: { createdAt: 'desc' },
        select: { patient_code: true },
    });

    if (!lastPatient) {
        return 'py-001';
    }

    return generateNextCode(lastPatient.patient_code);
}
