const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./routers/user.router");

class Server {
  constructor() {
    this.server = null;
  }

  start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(cors({ origin: "http://localhost:3000" }));
  }

  initRoutes() {
    this.server.use("/users", userRouter);
  }

  startListening() {
    this.server.listen(process.env.PORT, () => {
      console.log(`Server started at port: ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
