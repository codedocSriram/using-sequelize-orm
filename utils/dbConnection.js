const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "abcd1234", {
  host: "localhost",
  dialect: "mysql"
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been created");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "abcd1234",
//   database: "testdb"
// });

// connection.connect(err => {
//   if (err) {
//     console.log(err);
//     connection.end();
//     return;
//   }
//   console.log("Connection to testdb successful!");
// });

// module.exports = connection;
