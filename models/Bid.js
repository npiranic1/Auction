const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define(
    "bid",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        unique: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'id',
            as: 'product_id'
          }
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
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
    { freezeTableName: true }
  );
  return Bid;
};
