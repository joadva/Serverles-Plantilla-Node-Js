/**
 * @description Funcion de lambda para la creacion de un usuarios
 * @Author Adrian Valentin
 */

"use strict";

const { Usuarios } = require("../../../models/usuarios");
const { create } = require("../../db-repository/Generic/create-repository");

const createUser = async () => {
  try {
    const { id, firstname, lastname, status, correo, password, phone } =
      JSON.parse(event["body"]);

    const data = {
      id,
      firstname,
      lastname,
      status,
      correo,
      password,
      phone,
    };
    const response = await create(Usuarios, data);
  } catch (e) {}
};

module.exports = createUser;
