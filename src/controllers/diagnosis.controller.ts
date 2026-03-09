import { Request, Response, NextFunction } from 'express';
import * as diagnosisService from '../services/diagnosis.service';
import { sendSuccess } from '../utils/response';

export async function createDiagnosis(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
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

        sendSuccess(res, diagnosis, 'Diagnosis created successfully', 201);
    } catch (err) {
        next(err);
    }
}

export async function getAllDiagnoses(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
        const diagnoses = await diagnosisService.getAllDiagnoses(doctorId);
        sendSuccess(res, diagnoses, 'Diagnoses fetched successfully');
    } catch (err) {
        next(err);
    }
}

export async function predictDiagnosis(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
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

        const updated = await diagnosisService.predictDiagnosis(doctorId, id as string, patientId);
        sendSuccess(res, updated, 'Prediction completed and diagnosis linked successfully');
    } catch (err) {
        next(err);
    }
}
