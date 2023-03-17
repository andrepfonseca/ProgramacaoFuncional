const { count } = require("console");
const path = require("path");
const fn = require("./funcoes");

const dataPath = path.join(__dirname, "..", "legendas");
const symbols = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

fn.readDirectory(dataPath)
  .then(fn.filterElementsByExtension(".srt"))
  .then(fn.readFiles)
  .then(fn.joinContent)
  .then(fn.splitTextBy("\n"))
  .then(fn.removeEmptyItems)
  .then(fn.removeIfContainsSpecificText("-->"))
  .then(fn.removeIfContainsOnlyNumber)
  .then(fn.removeSymbols(symbols))
  .then(fn.joinContent)
  .then(fn.splitTextBy(" "))
  .then(fn.removeEmptyItems)
  .then(fn.removeIfContainsOnlyNumber)
  .then(fn.agroupWords)
  .then(fn.orderByCount("count", "desc"))
  .then(console.log);
