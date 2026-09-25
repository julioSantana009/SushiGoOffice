//Config
const express = require("express");
const App = express();

//DBConfig
const Data = require("./DataBase/Db");
const User_DB = require("./DataBase/User_Db");
Data.sync();

//UrlConfig
App.use(express.urlencoded({ extended: false }));
App.use(express.json());

App.get("/", (req, res) => {
  res.send("Olá mundo!");
});

App.listen(3000, () => {
  console.log("rodando na porta 3000");
});
