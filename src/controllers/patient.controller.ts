import { Request, Response, NextFunction } from 'express';
import * as patientService from '../services/patient.service';
import { sendSuccess } from '../utils/response';

export async function createPatient(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
        const { name, age, address } = req.body;

        if (!name || age === undefined || !address) {
            res.status(400).json({ status: 'error', message: 'name, age, and address are required' });
            return;
        }

        const patient = await patientService.createPatient(doctorId, {
            name,
            age: Number(age),
            address,
        });

        sendSuccess(res, patient, 'Patient created successfully', 201);
    } catch (err) {
        next(err);
    }
}

export async function getPatients(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
        const patients = await patientService.getPatients(doctorId);
        sendSuccess(res, patients);
    } catch (err) {
        next(err);
    }
}

export async function getPatientById(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
        const id = String(req.params['id']);
        const patient = await patientService.getPatientById(id, doctorId);
        sendSuccess(res, patient);
    } catch (err) {
        next(err);
    }
}

export async function updatePatient(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
        const id = String(req.params['id']);
        const { name, age, address } = req.body;

        const patient = await patientService.updatePatient(id, doctorId, {
            ...(name !== undefined && { name }),
            ...(age !== undefined && { age: Number(age) }),
            ...(address !== undefined && { address }),
        });

        sendSuccess(res, patient, 'Patient updated successfully');
    } catch (err) {
        next(err);
    }
}

export async function deletePatient(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    try {
        const doctorId = req.doctorId!;
        const id = String(req.params['id']);
        await patientService.deletePatient(id, doctorId);
        sendSuccess(res, null, 'Patient deleted successfully');
    } catch (err) {
        next(err);
    }
}
