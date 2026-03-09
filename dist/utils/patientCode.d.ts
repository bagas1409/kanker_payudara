/**
 * Generates the next patient code for a specific doctor.
 * Format: py-001, py-002, py-003, ...
 * The counter resets per doctor (each doctor has their own sequence).
 * Run inside a Prisma transaction for race-condition safety.
 */
export declare function generateNextCode(lastCode: string): string;
export declare function generatePatientCode(doctorId: string): Promise<string>;
//# sourceMappingURL=patientCode.d.ts.map