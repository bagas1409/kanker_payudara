"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNextCode = generateNextCode;
exports.generatePatientCode = generatePatientCode;
const database_1 = __importDefault(require("../config/database"));
/**
 * Generates the next patient code for a specific doctor.
 * Format: py-001, py-002, py-003, ...
 * The counter resets per doctor (each doctor has their own sequence).
 * Run inside a Prisma transaction for race-condition safety.
 */
function generateNextCode(lastCode) {
    const num = parseInt(lastCode.split('-')[1], 10);
    return `py-${String(num + 1).padStart(3, '0')}`;
}
async function generatePatientCode(doctorId) {
    const lastPatient = await database_1.default.patient.findFirst({
        where: { doctorId },
        orderBy: { createdAt: 'desc' },
        select: { patient_code: true },
    });
    if (!lastPatient) {
        return 'py-001';
    }
    return generateNextCode(lastPatient.patient_code);
}
//# sourceMappingURL=patientCode.js.map