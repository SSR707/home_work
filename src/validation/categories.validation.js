import Joi from "joi";

export const CategoriesValidation = (data) => {
  const validation = Joi.object({
    name: Joi.string().min(2)
  });
  return validation.validate(data);
};
