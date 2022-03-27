/**
 * @description Funciones para Sequelize crea un nuevo valor en una tabla.
 */

const create = async (model, data) => {
  console.log("datos que entran", model, data);
  const getReponse = await model.create(data);
  return getReponse;
};

module.exports = create;
