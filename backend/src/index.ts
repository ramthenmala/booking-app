import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import { corsOptions } from './utils/whitelist'

import userRoute from './routes/users';
import authRoute from './routes/auth';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions))

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(4001, () => {
    console.log('Server running on 4001')
})