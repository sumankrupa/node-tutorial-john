// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

// .(one dot)->root
// ..(double dot) -> one level above the root

// import object, list, variable, datatypes
const names = require("./4-firstmodules");
// import a function
const sayHi = require("./5-utils");

// if you are importing a module which is sending you multiple items it is imported as an object of those items
const data = require('./6-alteranative-flavor');

console.log(names);
// { john1: 'john1', john2: 'john2' }

// when you import, it invokes the whole module. so if it has a funciton and its function call the whole file run
require('./7-mind-grenade')


sayHi("suman");
sayHi("venki");
sayHi(names.john1);
