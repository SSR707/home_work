import Joi from "joi";

export const TagsValidation = (data) => {
  const validation = Joi.object({
    name: Joi.string().min(2)
  });
  return validation.validate(data);
};
