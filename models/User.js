const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        allowNull: true,
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
      salt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
          type: Sequelize.ENUM('male', 'female'),
          allowNull: true
      },
      phone_number: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true
      },
      residence_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'residence',
          key: 'id',
          as: 'residence_id'
        }
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
    { freezeTableName: true }
  );
  return User;
};

