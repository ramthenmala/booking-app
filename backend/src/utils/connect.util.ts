import mongoose from "mongoose";
import config from 'config';
import { v2 as cloudinary } from 'cloudinary';
import logStatus from "./log.util";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
})

async function connect() {
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri);
        logStatus.info('DB Connected Successfully')
    } catch (error) {
        logStatus.error('Could not connect db')
        process.exit(1)
    }
}

export default connect;