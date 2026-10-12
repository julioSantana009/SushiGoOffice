const Router = require("express").Router();
require("dotenv").config();
const UserController = require("../Controllers/userController");

Router.get("/", (req, res) => {
  res.send("testando");
});

Router.post("/users", UserController.login);

Router.post("/register", UserController.createUser);

Router.post("/auth", UserController.authenticateUser);



module.exports = Router;