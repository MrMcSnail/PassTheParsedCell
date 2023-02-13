import format from "pg-format";
import db from "./connection";
import fs from "fs/promises";

const seed = ({ lessonData }) => {
  return db
    .query(`DROP TABLE IF EXISTS lesson;`)
    .then(() => {
      const lessonTablePromise = db.query(`CREATE TABLE lesson (
        markdown VARCHAR,
        mdjson JSON
    );`);
      return Promise.all([lessonTablePromise]);
    })
    .then(() => {
      const dataArray = Promise.all([
        fs.readFile("./data/lesson.md", "utf-8"),
        lessonData,
      ]);

      const insertDataQueryStr = format(
        "INSERT INTO lesson (markdown, mdjson) VALUES %L RETURNING*;",
        dataArray
      );
      return db.query(insertDataQueryStr).then((result) => result.rows);
    });
};

module.exports = seed;
