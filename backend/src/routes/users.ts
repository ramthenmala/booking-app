import express from 'express';
import usersController from '../controllers/usersController';
import userValidation from '../validations/userValidation';

const router = express.Router();

router.post('/register', userValidation, usersController)

export default router;