import Joi from 'joi'

export const commentValidation = (data) => {
    const validation = Joi.object({
        user_id: Joi.number().required(),
        post_id: Joi.number().required(),
        content: Joi.string().max(255).required(),
    })
    return validation.validate(data)
}
