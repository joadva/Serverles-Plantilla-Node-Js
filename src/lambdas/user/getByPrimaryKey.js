/**
 * @description Funcion de lambda para obtener un dato por primary Key
 * @Author ADrian Valentin
 *
 */

"use strict";

const { Usuarios } = require("../../../models/usuarios");
const { getByPk } = require("../../db-repository/Generic/get-all-repository");
const {
  generateSuccess,
  generateCatch,
} = require("../../helpers/errorGenerate");

/**
 * @name funcition de sequelize para obtener todo los datos
 * @param model,pk
 * @return message y objeto con datos
 */
const getByPrimaryKey = async (event) => {
  try {
    const { id } = event.pathParameters;
    console.log("obtener el id", id);
    const response = await getByPk(Usuarios, id);
    return generateSuccess("Dato obtenido", response);
  } catch (e) {
    console.log(e);
    return generateCatch("Hubo un errorr en su peticion ", e.message);
  }
};

module.exports = {
  getByPrimaryKey,
};
