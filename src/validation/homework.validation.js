import Joi from "joi";

export const homeworkValidation = (data) => {
  const validation = Joi.object({
    text: Joi.string().min(2),
    user_id: Joi.number().min(2).required(),
    file: Joi.string().min(2),
    link: Joi.string().min(2),
    grads: Joi.string().min(2),
    start_time: Joi.date(),
    end_time: Joi.date()
  });
  return validation.validate(data);
};
