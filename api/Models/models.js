const db = require("../../db/connection");

exports.fetchLesson = () => {
  return db.query("SELECT * FROM lesson").then(({ rows }) => {
    return rows[0].mdjson;
  });
};
