/**
 * @description Funciones para Sequelize.
 */

const getAll = async (model) => {
  const getResponse = await model.findAll();
  return getResponse;
};

/**
 *
 *@description Funcion para encontrar por Primary key un valor
 * @param  model
 * @param  pk
 * @return objetos con los datos buscados
 */
const getByPk = async (model, pk) => {
  const getResponse = await model.findByPk(pk);
  return getResponse;
};

/**
 *
 *@description Funcion para encontrar por Primary key un valor que tenga el eliminar logico
 * @param  model
 * @param  pk
 * @return objetos con los datos buscados
 */
async function getByPkParanoid(model, pk) {
  const getResponse = await model.findByPk(pk, { paranoid: false });
  return getResponse;
}

/**
 *
 *@description Funcion para encontrar por columna
 * @param  model
 * @param  column
 * @return
 */
const getByColumn = async (model, column) => {
  const getResponse = await model.findOne({
    where: {
      column,
    },
  });
  return getResponse;
};

/**
 * @description Funcion para obtener todos los valores con Paranoid
 * @param  model
 * @return
 */
const getParanoidAll = async (model) => {
  const response = await model.findAll({ paranoid: false });
  return response;
};
module.exports = {
  getAll,
  getByPk,
  getByColumn,
  getByPkParanoid,
  getParanoidAll,
};
