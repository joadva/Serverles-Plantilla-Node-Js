"use strict";
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mariadb::memory");
const { db } = require("../connection");

const Compra = db.define(
  "Compra",
  {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    sequelize,
    tableName: "Compra",
  }
);

module.exports.Compra = Compra;
