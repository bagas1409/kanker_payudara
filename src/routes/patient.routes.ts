import { Router } from 'express';
import * as patientController from '../controllers/patient.controller';
import { authenticate } from '../middleware/authenticate';

const router = Router();

// All patient routes require authentication
router.use(authenticate);

router.post('/', patientController.createPatient);
router.get('/', patientController.getPatients);
router.get('/:id', patientController.getPatientById);
router.patch('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);

export default router;
