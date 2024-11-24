import Joi from "joi";

export const CoursesValidation = (data) => {
  const validation = Joi.object({
    name: Joi.string().min(2).required(),
    user_id: Joi.number().min(2).required(),
    desc: Joi.string().min(2).required(),
  });
  return validation.validate(data);
};
