// some useful built in modules
// 2.path

const path = require("path");
const { text } = require("stream/consumers");
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

// it returns the filename/folder at the end of the path
const basename = path.basename(filePath);
console.log(basename);

//
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "text.txt"
);
console.log(absolutePath);
