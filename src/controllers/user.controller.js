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
    const data = req.body;

    users.push({ id: users.length + 1, ...data });

    res.json(users);
  }

  updateUser(req, res, next) {
    const { id } = req.params;
    const data = req.body;

    const updUserIdx = users.findIndex((el) => el.id === Number(id));
    const updatedUser = { ...users[updUserIdx], ...data };

    users.splice(updUserIdx, 1, updatedUser);

    res.json(users);
  }

  deleteUser(req, res, next) {
    const { id } = req.params;
    const delUserIdx = users.findIndex((el) => el.id === Number(id));

    users.splice(delUserIdx, 1);

    res.status(204).send({});
  }
}

module.exports = new UserController();
