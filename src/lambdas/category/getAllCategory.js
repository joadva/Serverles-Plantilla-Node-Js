/**
 * @description Funcion para lambda de obtener todas las categorias
 * @Author Adrian Valentin
 *
 */

"use strict";

const { Categoria } = require("../../../models/categoria");
const { getAll } = require("../../db-repository/Generic/get-all-repository");
const {
  generateSuccess,
  generateCatch,
} = require("../../helpers/errorGenerate");

/**
 * @description Funcion para traer lo valores de categoria
 */
const getAllCategories = async () => {
  try {
    const reponse = await getAll(Categoria);
    return generateSuccess("Datos obtenidos", reponse);
  } catch (e) {
    return generateCatch("Huybo un erro en su peticion", e.message);
  }
};

module.exports = { getAllCategories };
