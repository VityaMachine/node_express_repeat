const Joi = require("joi");

class UserValidators {
  addNewUserValidator(req, res, next) {
    const newUserSchema = Joi.object({
      name: Joi.string().min(3).required(),
      surname: Joi.string().min(2).required(),
      age: Joi.number().greater(16).required(),
    });


    const validateResult = newUserSchema.validate({...req.body})

    if(validateResult.error) {
        return res.status(400).send(validateResult.error)
    }

    next()
  }
}

module.exports = new UserValidators();