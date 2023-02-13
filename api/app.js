const express = require("express");
const app = express();

app.use(express.json());

const { getLesson } = require("./Controller/controller");
app.get("/api/lesson", getLesson);

app.use((err, req, res, next) => {
  res.status(err.status).send({ msg: err.msg });
});

module.exports = app;
