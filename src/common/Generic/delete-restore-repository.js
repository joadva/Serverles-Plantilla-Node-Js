/**
 * @description Funciones para Sequelize eliminar un valor en una tabla.
 */

/**
 * @description Funciones para Eliminar de manera logica e la base de datos
 * @param {model,id}
 * @return delete true o false
 */
const deleteLogic = async (model, id) => {
  const getReponse = await model.destroy({
    where: {
      id: id,
    },
  });
  return getReponse;
};

/**
 *
 *@description Funcion poara eliminar permanentemente un item de la base de datos
 * @param  model
 * @param  id
 * @return delete item
 */
const destroyDb = async (model, id) => {
  const response = await model.destroy({
    where: {
      id: id,
    },
    force: true,
  });
  return response;
};

const restoreDb = async (model, id) => {
  const response = await model.restore({
    where: {
      id: id,
    },
  });
  return response;
};

module.exports = { deleteLogic, destroyDb, restoreDb };
