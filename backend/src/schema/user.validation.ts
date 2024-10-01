import { object, string } from "zod";

const userValidationSchema = object({
    body: object({
        firstName: string({
            required_error: 'First name is required',
        }).min(1, 'First name cannot be empty'),

        lastName: string({
            required_error: 'Last name is required',
        }).min(1, 'Last name cannot be empty'),

        phone: string({
            required_error: 'Phone number is required',
        }).min(10, 'Phone number must be at least 10 digits long'),

        password: string({
            required_error: 'Password is required',
        }).min(6, 'Password must be at least 6 characters long'),

        confirmPassword: string({
            required_error: 'Password confirmation is required',
        }).min(6, 'Password confirmation must be at least 6 characters long'),

        email: string({
            required_error: 'Email address is required',
        }).email('Please provide a valid email address'),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })
});

export default userValidationSchema;

