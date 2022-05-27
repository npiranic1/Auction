const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "image",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: 'product',
          key: 'id',
          as: 'product_id'
        }
      },
      main: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
    { freezeTableName: true }
  );
  return Image;
};
