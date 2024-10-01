import { object, string } from "zod";

const authValidationSchema = object({
    body: object({
        password: string({
            required_error: 'Password is required',
        }).min(6, 'Password must be at least 6 characters long'),
        email: string({
            required_error: 'Email is required',
        }).email('Invalid email address'),
    })
});

export default authValidationSchema;