/**
 * @description Funcion de lambda para la creacion de un usuarios
 * @Author Adrian Valentin
 */

"use strict";

const { Usuarios } = require("../../../models/usuarios");
const { create } = require("../../common/Generic/create-repository");
const {
  generateCatch,
  generateCreate,
} = require("../../common/helpers/errorGenerate");
const { v4: uuidv4 } = require("uuid");

const createUser = async (event) => {
  try {
    const { firstname, lastname, correo, password, phone } = JSON.parse(
      event["body"]
    );

    const data = {
      id: uuidv4(),
      firstname,
      lastname,
      status: 1,
      correo,
      password,
      phone,
    };
    const response = await create(Usuarios, data);
    return generateCreate("Dato Creado", response);
  } catch (e) {
    console.log(e);
    return generateCatch("Hubo un error en su peticion", e.message);
  }
};

module.exports = { createUser };
