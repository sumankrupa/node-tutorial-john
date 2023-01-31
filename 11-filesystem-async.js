// filesystem storage async

const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/subfolder/result-async.txt",
      `here is the second result which shows async:${first},${second}`,
      (err, result) => {
        if (err) {
          return;
          console.log(err);
        }
        console.log(result);
      }
    );
  });
});

// its messy, alternatives are 1. using promises 2. async await 

// async await over promises
