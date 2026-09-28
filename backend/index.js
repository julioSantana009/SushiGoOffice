//Config
const express = require("express");
const App = express();
const cors = require("cors");

//DBConfig
const Data = require("./DataBase/Db");
const User_DB = require("./DataBase/User_Db");
Data.sync();

//UrlConfig
App.use(cors());
App.use(express.urlencoded({ extended: false }));
App.use(express.json());

App.get("/", (req, res) => {
  res.send("Olá mundo!");
});

App.post("/users", async (req, res) => {
  let { email, password } = req.body;
  console.log(`${email} ${password}`);
});

App.listen(3000, () => {
  console.log("rodando na porta 3000");
});
