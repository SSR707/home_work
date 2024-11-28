import Joi from "joi";

export const examValidation = (data) => {
  const validation = Joi.object({
    student_id: Joi.number().required(),
    lesson_id: Joi.number().required(),
    score: Joi.number().required(),
    exam_date: Joi.date().required(),
  });
  return validation.validate(data);
};
