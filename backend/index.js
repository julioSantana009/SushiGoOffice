//Config
const express = require("express");
const App = express();
const cors = require("cors");
const mainRoutes = require("./routes/index");

//DBConfig
const Data = require("./DataBase/Db");

Data.sync();

//UrlConfig
App.use(cors());
App.use(express.urlencoded({ extended: false }));
App.use(express.json());


  App.use("/", mainRoutes);
  App.use("/users", mainRoutes);
  App.use("/register", mainRoutes);
  App.use("/auth", mainRoutes);


App.listen(3000, () => {
  console.log("rodando na porta 3000");
});
