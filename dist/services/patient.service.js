"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPatient = createPatient;
exports.getPatients = getPatients;
exports.getPatientById = getPatientById;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;
const database_1 = __importDefault(require("../config/database"));
const AppError_1 = require("../utils/AppError");
const patientCode_1 = require("../utils/patientCode");
async function createPatient(doctorId, dto) {
    return await database_1.default.$transaction(async (tx) => {
        // Run inside transaction to avoid race condition on code generation
        const lastPatient = await tx.patient.findFirst({
            where: { doctorId },
            orderBy: { createdAt: 'desc' },
            select: { patient_code: true },
        });
        const patientCode = lastPatient
            ? (0, patientCode_1.generateNextCode)(lastPatient.patient_code)
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
async function getPatients(doctorId) {
    return await database_1.default.patient.findMany({
        where: { doctorId },
        orderBy: { createdAt: 'asc' },
    });
}
async function getPatientById(id, doctorId) {
    const patient = await database_1.default.patient.findUnique({ where: { id } });
    if (!patient) {
        throw new AppError_1.AppError(404, 'Patient not found');
    }
    if (patient.doctorId !== doctorId) {
        throw new AppError_1.AppError(403, 'Forbidden: not your patient');
    }
    return patient;
}
async function updatePatient(id, doctorId, dto) {
    // Ownership check first
    await getPatientById(id, doctorId);
    return await database_1.default.patient.update({
        where: { id },
        data: dto,
    });
}
async function deletePatient(id, doctorId) {
    // Ownership check first
    await getPatientById(id, doctorId);
    await database_1.default.patient.delete({ where: { id } });
}
//# sourceMappingURL=patient.service.js.map