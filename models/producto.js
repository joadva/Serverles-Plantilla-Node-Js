const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mariadb::memory");
const { db } = require("../connection");

const Producto = db.define(
  "Producto",
  {
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    sequelize,
    tableName: "Producto",
  }
);

module.exports.Producto = Producto;
