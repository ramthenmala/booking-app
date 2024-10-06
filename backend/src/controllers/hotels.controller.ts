import { Request, Response } from "express";
import cloudinary from 'cloudinary'
import logStatus from "../utils/log.util";

const hotelsHandler = async(req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel = req.body;

        // Upload Images
        const uploadImages = imageFiles.map(async (image) => {
            const imageB64 = Buffer.from(image.buffer).toString('base64');
            let dataURI = 'data:' + image.mimetype + ';base64,' + imageB64;

            const res = await cloudinary.v2.uploader.upload(dataURI);
            return res.url;
        });

        const imageUrls = await Promise.all(uploadImages)

        // if upload was successful add the URLs to the new hotel
        
        // Save the new hotel in our db

        // return a 201 status

    } catch (error: any) {
        logStatus.error('Health Check Error: ', error);
        return res.status(500).json({ status: 'ERROR', message: 'Something went wrong' });
    }
};

export default hotelsHandler;