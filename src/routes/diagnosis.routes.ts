import { Router } from 'express';
import * as diagnosisController from '../controllers/diagnosis.controller';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.use(authenticate);

// List all diagnoses
router.get('/all', diagnosisController.getAllDiagnoses);

// AI Simulation Endpoint
router.post('/predict/:id', diagnosisController.predictDiagnosis);

// Save new diagnosis
router.post('/', diagnosisController.createDiagnosis);

export default router;
