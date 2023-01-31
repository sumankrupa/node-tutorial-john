// some useful built in modules
// 1.os - useful

const os = require("os");

// info about the current user
const user = os.userInfo();
console.log(user);

// method to return system uptime is seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
