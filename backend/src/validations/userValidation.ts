import { check } from 'express-validator';

const userValidation = [
    check('firstName', 'First Name is required').isString(),
    check('lastName', 'Last Name is required').isString(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({
        min: 6
    }),
]

export default userValidation;