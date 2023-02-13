const { Pool } = require("pg");

require("dotenv").config({
  path: `${__dirname}/../.env.dev`,
});

if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE not set");
}

module.exports = new Pool();
