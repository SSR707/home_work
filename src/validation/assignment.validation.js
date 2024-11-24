import Joi from "joi";

export const AssignmentValidation = (data) => {
  const validation = Joi.object({
    couses_id: Joi.number().min(2).required(),
    ttudent_id: Joi.number().min(2).required(),
    teacher_id: Joi.number().min(2).required()
  });
  return validation.validate(data);
};
