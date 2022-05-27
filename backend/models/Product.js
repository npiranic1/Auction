const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: 'category',
          key: 'id',
          as: 'category_id'
        }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      start_date: {
          type: Sequelize.DATE,
          allowNull: false
      },
      end_date: {
          type: Sequelize.DATE,
          allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
          as: 'user_id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
    { freezeTableName: true }
  );
  return Product;
};
