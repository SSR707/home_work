import Joi from "joi";

export const CommentsValidation = (data) => {
  const validation = Joi.object({
    post_id: Joi.number().min(2).required(),
    user_id: Joi.number().min(2).required(),
    body: Joi.string().min(2),
  });
  return validation.validate(data);
};
