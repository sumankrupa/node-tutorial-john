// lesson 2

// globals - no window

// __dirname  - path to current directory
// __filename - file name
// require    - fuction to use module (common js)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
// setinterval runs every second
setInterval(() => {
  console.log("hello world");
}, 1000);

// set timeout runs after the time specified, which is 10s in this case

setTimeout(() => {
  console.log("hello world1");
}, 10000);

