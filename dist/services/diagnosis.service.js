"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiagnosis = createDiagnosis;
exports.getAllDiagnoses = getAllDiagnoses;
exports.predictDiagnosis = predictDiagnosis;
const database_1 = __importDefault(require("../config/database"));
const AppError_1 = require("../utils/AppError");
const diagnosisCode_1 = require("../utils/diagnosisCode");
async function createDiagnosis(doctorId, data, patientId) {
    // 1. Verify patient belongs to doctor (if provided)
    if (patientId) {
        const patient = await database_1.default.patient.findFirst({
            where: {
                id: patientId,
                doctorId: doctorId
            }
        });
        if (!patient) {
            throw new AppError_1.AppError(404, 'Patient not found or you do not have permission to access this patient');
        }
    }
    // 2. Generate sequential diagnosis code for this doctor
    const diagnosisCode = await (0, diagnosisCode_1.generateDiagnosisCode)(doctorId);
    // 3. Insert diagnosis
    const diagnosis = await database_1.default.diagnosis.create({
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
async function getAllDiagnoses(doctorId) {
    return await database_1.default.diagnosis.findMany({
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
async function predictDiagnosis(doctorId, diagnosisId, patientId) {
    // 1. Verify diagnosis ownership and existence
    const diagnosis = await database_1.default.diagnosis.findFirst({
        where: {
            id: diagnosisId,
            doctorId
        }
    });
    if (!diagnosis) {
        throw new AppError_1.AppError(404, 'Diagnosis not found or you do not have permission.');
    }
    // 2. Verify patient belongs to doctor
    const patient = await database_1.default.patient.findFirst({
        where: {
            id: patientId,
            doctorId
        }
    });
    if (!patient) {
        throw new AppError_1.AppError(404, 'Target patient not found or you do not have permission.');
    }
    // 3. Simulate prediction by linking patient and updating vital status
    const updated = await database_1.default.diagnosis.update({
        where: { id: diagnosisId },
        data: {
            patientId: patientId,
            patient_vital_status: "Living"
        }
    });
    return updated;
}
//# sourceMappingURL=diagnosis.service.js.map