const { Router } = require("express");

const userController = require('../controllers/user.controller')
const userValidators = require("../validators/user.validators");

const userRouter = Router();


userRouter.get('/', userController.getUsers)

userRouter.get('/:id', userController.getUserById)

userRouter.post('/', userValidators.addNewUserValidator, userController.addNewUser)


module.exports = userRouter
