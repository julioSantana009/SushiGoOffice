const sequelize = require("sequelize");
const Sequelize = new sequelize("sushigo", "root", "0509", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = Sequelize;
