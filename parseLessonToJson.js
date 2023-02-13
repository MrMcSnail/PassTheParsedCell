import { marked } from "marked";
import fs from "fs/promises";

const lesson = fs.readFile("./lesson.md", "utf-8").then((data) => {
  return marked.lexer(data);
});

module.exports = { lesson };
