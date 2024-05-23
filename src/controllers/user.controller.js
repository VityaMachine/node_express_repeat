const users = require("../db/users");

class UserController {
  getUsers(req, res, next) {
    return res.json(users);
  }

  getUserById(req, res, next) {
    const { id } = req.params;

    const userToShow = users.find((el) => el.id === Number(id));

    res.json(userToShow);
  }

  addNewUser(req, res, next) {
    
  }
}

module.exports = new UserController();
