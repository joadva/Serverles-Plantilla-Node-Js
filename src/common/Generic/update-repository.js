/**
 * @description Funciones para Sequelize para actualizar.
 */

const updatePk = async (model, data, id) => {
  const response = await model.update(data, {
    where: {
      id: id,
    },
  });
  return response;
};

module.exports = updatePk;
