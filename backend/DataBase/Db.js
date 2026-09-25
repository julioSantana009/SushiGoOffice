const sequelize = require("sequelize");
const Sequelize = new sequelize("sushigo", "root", "lira0509", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = Sequelize;
