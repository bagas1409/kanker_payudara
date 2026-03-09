import { Router } from 'express';
import authRoutes from './auth.routes';
import patientRoutes from './patient.routes';
import diagnosisRoutes from './diagnosis.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/diagnosis', diagnosisRoutes);

export default router;
