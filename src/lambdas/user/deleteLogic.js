/**
 * @description Funcion de lambda para eliminar un usuarios de manera logica
 * @Author Adrian Valentin
 */

"use strict";

const { Usuarios } = require("../../../models/usuarios");
const {
  deleteLogic,
} = require("../../common/Generic/delete-restore-repository");
const {
  generateCatch,
  generateSuccess,
} = require("../../common/helpers/errorGenerate");

const deleteLogicUser = async (event) => {
  try {
    const { id } = event.pathParameters;
    const response = await deleteLogic(Usuarios, id);
    return generateSuccess("Item eliminado", response);
  } catch (e) {
    console.log(e);
    return generateCatch("Hubo un error en su peticion", e.message);
  }
};

module.exports = {
  deleteLogicUser,
};
