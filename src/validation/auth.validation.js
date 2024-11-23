import Joi from "joi";
import email from "../config/email";

export const registerValidation  = (data) => {
    const validation = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
        password:  Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
        last_login: Joi.string().min(2).required()
    })
}