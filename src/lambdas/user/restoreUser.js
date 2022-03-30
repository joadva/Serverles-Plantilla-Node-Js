/**
 * @description Funcion de lambda para restore un usuarios de manera logica
 * @Author Adrian Valentin
 */

"use strict";

const { Usuarios } = require("../../../models/usuarios");
const { restoreDb } = require("../../common/Generic/delete-restore-repository");
const {
  generateCatch,
  generateSuccess,
} = require("../../common/helpers/errorGenerate");

const restoreUser = async (event) => {
  try {
    const { id } = event.pathParameters;
    const response = await restoreDb(Usuarios, id);
    return generateSuccess("Item restaurado", response);
  } catch (e) {
    console.log(e);
    return generateCatch("Hubo un error en su peticion", e.message);
  }
};

module.exports = {
  restoreUser,
};
