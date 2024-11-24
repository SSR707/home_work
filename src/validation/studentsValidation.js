import Joi from "joi";

export const StudentsValidation = (data) => {
  const validation = Joi.object({
    prmission: Joi.boolean().min(2).required(),
    user_id: Joi.number().min(2).required(),
  });
  return validation.validate(data);
};
