import prisma from '../config/database';

/**
 * Generate a sequential diagnosis code for a doctor in the format: MB-XXX
 * Example: MB-001, MB-002, etc.
 * 
 * @param doctorId The ID of the doctor creating the diagnosis
 * @returns Generated diagnosis code string
 */
export const generateDiagnosisCode = async (doctorId: string): Promise<string> => {
    // Attempt to find the latest diagnosis created by this doctor based on creation date
    const latestDiagnosis = await prisma.diagnosis.findFirst({
        where: {
            doctorId: doctorId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    if (!latestDiagnosis || !latestDiagnosis.diagnosis_code) {
        // First diagnosis for this doctor
        return 'MB-001';
    }

    // Extract the numeric part from the latest code (e.g., extracting 001 from MB-001)
    const codeString = latestDiagnosis.diagnosis_code;
    const parts = codeString.split('-');

    if (parts.length === 2 && parts[0] === 'MB') {
        const numberString = parts[1];
        const latestNumber = parseInt(numberString, 10);

        if (!isNaN(latestNumber)) {
            // Increment the number and pad with zeros to ensure 3 digits
            const nextNumber = latestNumber + 1;
            const paddedNumber = String(nextNumber).padStart(3, '0');
            return `MB-${paddedNumber}`;
        }
    }

    // Fallback if parsing fails (should minimally happen)
    // You could also do a count, but count can be flaky if rows are deleted.
    const count = await prisma.diagnosis.count({
        where: { doctorId: doctorId }
    });

    return `MB-${String(count + 1).padStart(3, '0')}`;
};
