import Joi from 'joi'

export const commentValidation = (data) => {
    const validation = Joi.object({
        user_id: Joi.number().required(),
        title: Joi.string().max(255).required(),
        content: Joi.string().max(255).required(),
        slug: Joi.string().max(255).required(),
    })
    return validation.validate(data)
}
