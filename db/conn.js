const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlsequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
// try {
//   sequelize.authenticate();
//   console.log(`Conectado com sucesso ao banco de dados`);
// } catch (error) {
//   console.log(`Não foi possivel conectar ao banco. ${error}`);
// }

module.exports = sequelize;
