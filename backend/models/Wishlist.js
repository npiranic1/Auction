const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define(
    "wishlist",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
  return Wishlist;
};
