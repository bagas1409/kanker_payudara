"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiagnosis = createDiagnosis;
exports.getAllDiagnoses = getAllDiagnoses;
exports.predictDiagnosis = predictDiagnosis;
const diagnosisService = __importStar(require("../services/diagnosis.service"));
const response_1 = require("../utils/response");
async function createDiagnosis(req, res, next) {
    try {
        const doctorId = req.doctorId;
        const { patientId, ...diagnosisData } = req.body;
        const parsedData = {
            ...diagnosisData,
            age_at_diagnosis: Number(diagnosisData.age_at_diagnosis),
            cohort: Number(diagnosisData.cohort),
            neoplasm_histologic_grade: Number(diagnosisData.neoplasm_histologic_grade),
            lymph_nodes_examined_positive: Number(diagnosisData.lymph_nodes_examined_positive),
            mutation_count: Number(diagnosisData.mutation_count),
            nottingham_prognostic_index: Number(diagnosisData.nottingham_prognostic_index),
            overall_survival_months: Number(diagnosisData.overall_survival_months),
            relapse_free_status_months: Number(diagnosisData.relapse_free_status_months),
            tumor_size: Number(diagnosisData.tumor_size),
            tumor_stage: Number(diagnosisData.tumor_stage),
        };
        const diagnosis = await diagnosisService.createDiagnosis(doctorId, parsedData, patientId);
        (0, response_1.sendSuccess)(res, diagnosis, 'Diagnosis created successfully', 201);
    }
    catch (err) {
        next(err);
    }
}
async function getAllDiagnoses(req, res, next) {
    try {
        const doctorId = req.doctorId;
        const diagnoses = await diagnosisService.getAllDiagnoses(doctorId);
        (0, response_1.sendSuccess)(res, diagnoses, 'Diagnoses fetched successfully');
    }
    catch (err) {
        next(err);
    }
}
async function predictDiagnosis(req, res, next) {
    try {
        const doctorId = req.doctorId;
        const { id } = req.params;
        const { patientId } = req.body;
        if (!id) {
            res.status(400).json({ status: 'error', message: 'Diagnosis ID is required' });
            return;
        }
        if (!patientId) {
            res.status(400).json({ status: 'error', message: 'patientId is required for prediction to link the diagnosis' });
            return;
        }
        const updated = await diagnosisService.predictDiagnosis(doctorId, id, patientId);
        (0, response_1.sendSuccess)(res, updated, 'Prediction completed and diagnosis linked successfully');
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=diagnosis.controller.js.map