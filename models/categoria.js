const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mariadb::memory");
const { db } = require("../connection");

const Categoria = db.define(
  "Categoria",
  {
    name: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    sequelize,
    tableName: "Categoria",
  }
);

module.exports.Categoria = Categoria;
