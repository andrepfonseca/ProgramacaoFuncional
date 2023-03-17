const fs = require("fs");
const path = require("path");

function readFiles(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, function (_, content) {
      resolve(content.toString());
    });
  });
}

const filePath = path.join(__dirname, "dados.txt");

readFiles(filePath)
  .then((content) => content.split("\r"))
  .then((lines) => lines.join(","))
  .then(console.log);
