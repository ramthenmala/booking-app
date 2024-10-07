import { object, string, number, array } from "zod";

const hotelValidationSchema = object({
    body: object({
        userId: string().min(1, { message: "User ID is required" }),
        name: string().min(1, { message: "Name is required" }),
        city: string().min(1, { message: "City is required" }),
        country: string().min(1, { message: "Country is required" }),
        description: string().min(1, { message: "Description is required" }),
        type: string().min(1, { message: "Type is required" }),
        adultCount: number().min(1, { message: "At least one adult is required" }).int(),
        childCount: number().min(0, { message: "Child count cannot be negative" }).int(),
        facilities: array(string().min(1, { message: "Facility name cannot be empty" })).min(1, { message: "At least one facility is required" }),
        pricePerNight: number().min(0, { message: "Price per night cannot be negative" }),
        starRating: number().min(1, { message: "Star rating must be at least 1" }).max(5, { message: "Star rating cannot exceed 5" }),
    }),
});

export default hotelValidationSchema;
