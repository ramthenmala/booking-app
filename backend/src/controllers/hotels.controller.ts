import { Response } from "express";
import cloudinary from 'cloudinary'
import { IHotel } from "../type/IHotels";
import logStatus from "../utils/log.util";
import { IRequestUserId } from "../type/IRequestUserId";
import Hotels from "../models/hotel.model";

const hotelsHandler = async (req: IRequestUserId, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel: IHotel = req.body;

        const uploadImages = imageFiles.map(async (image) => {
            const imageB64 = Buffer.from(image.buffer).toString('base64');
            let dataURI = 'data:' + image.mimetype + ';base64,' + imageB64;

            const res = await cloudinary.v2.uploader.upload(dataURI);
            return res.url;
        });

        const imageUrls = await Promise.all(uploadImages);
        newHotel.imageUrls = imageUrls;
        newHotel.lastUpdated = new Date();
        newHotel.userId = req.userId;

        const hotel = new Hotels(newHotel);
        await hotel.save()

        return res.status(201).send({
            message: 'Saved Successfully'
        })
    } catch (error: any) {
        logStatus.error('Health Check Error: ', error);
        return res.status(500).json({ status: 'ERROR', message: 'Something went wrong' });
    }
};

export default hotelsHandler;