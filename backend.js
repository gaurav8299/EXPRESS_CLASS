const express = require("express");
const { Sequelize, Op } = require("sequelize");
const app = express();
app.use(express.json());

var dbConfig = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Gaurav*123",
  DB: "book_store",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Define schema for books
const Books = sequelize.define("books", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  published: {
    type: Sequelize.BOOLEAN,
  },
});

// Sync Sequelize with database
sequelize
  .sync()
  .then(() => {
    console.log("Drop and re-sync db.");
  })
  .catch((err) => {
    console.error("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the PostgreSQL application." });
});
app.listen(5004);
