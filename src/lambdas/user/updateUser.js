/**
 * @description Funcion de lambda para Editar un dato por primary Key
 * @Author ADrian Valentin
 *
 */

"use strict";

const { Usuarios } = require("../../../models/usuarios");
const updatePk = require("../../common/Generic/update-repository");
const {
  generateSuccess,
  generateCatch,
} = require("../../common/helpers/errorGenerate");

/**
 * @name funcition de sequelize para editar
 * @param model,data,id
 * @return message y objeto con datos
 */
const updateByPrimaryKey = async (event) => {
  try {
    const { id } = event.pathParameters;
    const { firstname, lastname, correo, password, phone, status } = JSON.parse(
      event["body"]
    );
    const data = { firstname, lastname, correo, password, phone, status };
    const response = await updatePk(Usuarios, data, id);
    return generateSuccess("Dato obtenido", response);
  } catch (e) {
    console.log(e);
    return generateCatch("Hubo un errorr en su peticion ", e.message);
  }
};

module.exports = {
  updateByPrimaryKey,
};
