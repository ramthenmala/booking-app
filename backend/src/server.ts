import mongoose from 'mongoose';
import 'dotenv/config';
import app from './app';
import { MONGODB } from './config/config';

const PORT = process.env.PORT || 4001;

const startServer = async () => {
    try {
        await mongoose.connect(MONGODB);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};

startServer(); 
