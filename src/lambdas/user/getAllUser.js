/**
 * @description Funcion de lambda para obtener Todos los datos
 * @Author ADrian Valentin
 *
 */

"use strict";

const { Usuarios } = require("../../../models/usuarios");
const { getAll } = require("../../db-repository/Generic/get-all-repository");
const {
  generateSuccess,
  generateCatch,
} = require("../../helpers/errorGenerate");

/**
 * @name funcition de sequelize para obtener todo los datos
 * @param model
 * @return message y objeto con datos
 */
const getAllUser = async () => {
  try {
    const response = await getAll(Usuarios);
    return generateSuccess("Peticion Correcta", response);
  } catch (e) {
    console.log(e);
    return generateCatch("Hubo un errorr en su peticion ", e.message);
  }
};

module.exports = {
  getAllUser,
};
