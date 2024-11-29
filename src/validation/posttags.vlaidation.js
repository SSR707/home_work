import Joi from "joi";

export const PostTagsValidation = (data) => {
  const validation = Joi.object({
    post_id: Joi.number().min(2).required(),
    tag_id: Joi.number().min(2).required(),
  });
  return validation.validate(data);
};
