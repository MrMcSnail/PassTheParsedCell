const { fetchLesson } = require("../Models/models");

exports.getLesson = (req, res, next) => {
  return fetchLesson()
    .then((lessonData) => {
      res.send(lessonData);
    })
    .catch((err) => {
      next(err);
    });
};
