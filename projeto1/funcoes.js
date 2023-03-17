const fs = require("fs");
const path = require("path");

function readDirectory(filesPath) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(filesPath);
      const fullFiles = files.map((file) => path.join(filesPath, file));
      resolve(fullFiles);
    } catch (err) {
      reject(err);
    }
  });
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(filePath, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (err) {
      reject(err);
    }
  });
}

function readFiles(filesPaths) {
  return Promise.all(filesPaths.map((filePath) => readFile(filePath)));
}

function filterElementsByExtension(pattern) {
  return function (array) {
    return array.filter((el) => el.endsWith(pattern));
  };
}

function removeEmptyItems(array) {
  return array.filter((el) => el.trim());
}

function removeIfContainsSpecificText(specificText) {
  return function (array) {
    return array.filter((el) => !el.includes(specificText));
  };
}

function removeIfContainsOnlyNumber(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removeSymbols(symbols) {
  return function (array) {
    return array.map((el) => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, el);
    });
  };
}

function joinContent(array) {
  return array.join(" ");
}

function splitTextBy(char) {
  return function (text) {
    return text.split(char);
  };
}

function agroupWords(words) {
  return Object.values(
    words.reduce((acc, word) => {
      const lowerCaseWord = word.toLowerCase();
      const count = acc[lowerCaseWord] ? acc[lowerCaseWord].count + 1 : 1;
      acc[lowerCaseWord] = {
        word: lowerCaseWord,
        count,
      };
      return acc;
    }, {})
  );
}

function orderByCount(attr, order = "asc") {
  return function (array) {
    const asc = (obj1, obj2) => obj1[attr] - obj2[attr];
    const desc = (obj1, obj2) => obj2[attr] - obj1[attr];
    return array.sort(order === "asc" ? asc : desc);
  };
}

module.exports = {
  readDirectory,
  filterElementsByExtension,
  readFiles,
  readFile,
  removeEmptyItems,
  removeIfContainsSpecificText,
  removeIfContainsOnlyNumber,
  removeSymbols,
  joinContent,
  splitTextBy,
  agroupWords,
  orderByCount,
};
