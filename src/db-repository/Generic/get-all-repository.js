/**
 * @description Funciones para Sequelize.
 */

const { where } = require("sequelize/types");

const getAll = async (model) => {
  console.log("model", model);
  const getResponse = await model.findAll();

  return getResponse;
};

const getById = async (model, id) => {
  const getResponse = await model.findOne({
    where: {
      id_usuario,
    },
  });
  return getResponse;
};

module.exports = {
  getAll,
  getById,
};
