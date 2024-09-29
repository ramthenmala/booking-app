import { check } from 'express-validator';

const authValidation = [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password with 6 or more characters required').isLength({
        min: 6
    }),
]

export default authValidation;