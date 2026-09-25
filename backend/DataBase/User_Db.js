const data = require("./Db");
const Sequelize = require("sequelize");

const User = data.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: true,
  },
  password: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = User;
