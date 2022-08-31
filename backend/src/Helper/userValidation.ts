import Joi from "joi";

export const UserRegisterSchema = Joi.object({
  user_name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

export const UserLoginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});
