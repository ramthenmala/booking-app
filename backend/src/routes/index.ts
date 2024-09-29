import { Router } from 'express';
import userRoute from './users';
import authRoute from './auth';

const router = Router();

router.use('/users', userRoute);
router.use('/auth', authRoute);  

export default router;
