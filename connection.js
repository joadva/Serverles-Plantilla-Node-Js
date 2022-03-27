const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "tienda-db",
  "root",
  "",
  {
    host: "127.0.0.1",
    dialect: "mariadb",
  }
  // process.env.DB_NAME,
  // process.env.DB_USERNAME,
  // process.env.DB_PASSWORD,
  // {
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT,
  // }
);

// Async query handler
exports.sqs = async (event, context) => {
  // Get your query
  const record = event.Records[0];
  const { query } = JSON.parse(record.body);

  // Run your query
  let results = await db.query(query);

  // Run clean up function
  await db.end();

  // Return the results
  return results;
};

// Sync query handler
exports.query = async (event, context) => {
  // Get your query
  const data = event.body ? JSON.parse(event.body) : {};
  const { query } = data;

  // Run your query
  let results = await db.query(query);

  // Run clean up function
  await db.end();

  // Return the results
  return results;
};

module.exports = {
  db,
};
