// eventloop
// we can offload using callback functions
// but for loops cannot be offload to make it asynchronous

// js, python is sychronous and single threaded
// but actually it is not multi threaded

// js - eventloop
// what is eventlooop?
// eventloop is what allows node.js to perform non-blocking i/o operations- despite
// the fact that JavaScript is single threaded - by offloading operations to the system kernel whenever possible

// asynchronous code - 3 ways
// callbacks - which allows you to provide functions to call once the asynchronous method has finished running
// promises - which allows you to chain methods together
// async/await - which are some syntactic sugar over promises

// callbacks
const { readFile } = require("fs");

console.log("started the first task");

readFile("./content/subfolder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");
