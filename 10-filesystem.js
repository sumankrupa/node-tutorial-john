// some useful built in modules
// 3.fs - filesystem(sync)

const { readFileSync, writeFileSync } = require("fs");

// this is same as
// const fs = require('fs')
// const readFileSync = fs.readFileSync

const first = readFileSync("./content/subfolder/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/second.txt", "utf-8");

console.log(first,second);

// if the file is there no problem else it creates the file and writes
writeFileSync('./content/subfolder/result-sync.txt',`here is the result: ${first},${second}`)

// if you want to append the new data

writeFileSync(
  "./content/subfolder/result-sync.txt",
  `here is the result: ${first},${second}`,
  {flag:'a'}
);