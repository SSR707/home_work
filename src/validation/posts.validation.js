import Joi from "joi";

export const PostsValidation = (data) => {
  const validation = Joi.object({
    user_id: Joi.number().min(2).required(),
    title: Joi.string().min(2),
    body: Joi.string().min(2),
    category_id: Joi.number().min(2).required(),
  });
  return validation.validate(data);
};
