import express from 'express';
import authController from '../controllers/auth.controller';
import authValidation from '../schema/auth.validation';

const router = express.Router();

router.post('/login', authValidation, authController)

export default router;