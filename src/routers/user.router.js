const { Router } = require("express");

const userController = require("../controllers/user.controller");
const userValidators = require("../validators/user.validators");

const userRouter = Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUserById);

userRouter.post(
  "/",
  userValidators.addNewUserValidator,
  userController.addNewUser
);

userRouter.patch("/:id", userValidators.updateUserValidator, userController.updateUser)

userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter;
