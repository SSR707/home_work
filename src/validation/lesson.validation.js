import Joi from "joi";

export const lessonValidation = (data) => {
  const validation = Joi.object({
    lesson_name: Joi.string().min(2).required(),
    homework_id: Joi.number().min(2).required(),
    vidio: Joi.string().min(2),
    homework: Joi.string().min(2).required(),
    room: Joi.string().min(2),
    start_time: Joi.date(),
    end_time: Joi.date()
  });
  return validation.validate(data);
};
