const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
          type: Sequelize.ENUM('male', 'female'),
          allowNull: false
      },
      phone_number: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      residence_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
    { freezeTableName: true }
  );
  return User;
};
