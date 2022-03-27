/**
 * @description Funciones para Sequelize.
 */

const getAll = async (model) => {
  console.log("model", model);
  const getResponse = await model.findAll();
  console.log(getResponse);

  return getResponse;
};

const getByPk = async (model, pk) => {
  const getResponse = await model.findByPk(pk);
  return getResponse;
};

const getByColumn = async (model, column) => {
  const getResponse = await model.findOne({
    where: {
      column,
    },
  });
  return getResponse;
};

module.exports = {
  getAll,
  getByPk,
  getByColumn,
};
