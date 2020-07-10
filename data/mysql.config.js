const MyDatabase = require("./methods");

const knexConfig = {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "",
        database: "Book",
    },
};

const db = new MyDatabase(knexConfig);

module.exports = db;