import express from 'express';
import authController from '../controllers/authController';
import authValidation from '../validations/authValidation';

const router = express.Router();

router.post('/login', authValidation, authController)

export default router;