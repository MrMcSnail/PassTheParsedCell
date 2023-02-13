const format = require("pg-format");
const db = require("./connection");
const fs = require("fs/promises");
const marked = require('marked');

const seed = () => {
	return db
		.query(`DROP TABLE IF EXISTS lesson;`)
		.then(() => {
			const lessonTablePromise = db.query(`CREATE TABLE lesson 
      (mdjson json);
        `);
			return Promise.all([lessonTablePromise]);
		})
		.then(() => {
			return fs.readFile("./db/data/lesson.md", "utf-8");
		})
		.then((data) => {
			return marked.lexer(data);
		})
		.then((lessonData) => {
			const insertDataQueryStr = format(
				"INSERT INTO lesson (mdjson) VALUES (%L) RETURNING*;",
        [{ lessonData }]
			);
			return db.query(insertDataQueryStr).then((result) => {
				return result.rows[0];
			});
		});
};

module.exports = seed;
