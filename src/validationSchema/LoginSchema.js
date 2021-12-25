import { check } from "express-validator";
export default [
    check('username','username is required').exists().isLength({min:3,max:12}).withMessage("username should be 3 to 12 chars"),
    check('password','password is required').exists().isLength({min:3,max:12}).withMessage("username should be 3 to 12 chars"),
]