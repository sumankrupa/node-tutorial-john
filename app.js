// npm - global command, comes with node
// npm --version

// local dependancy - use it only in this particular project
// npm i packageName

// global dependancy - use it in any project
// npm install -g packagename
// sudo npm install -g packagename

// package.json -manifest file (stores imortant info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)

// npm init -y (everything default) - recommended

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);

console.log("hello people");

// npm uninstall package name

