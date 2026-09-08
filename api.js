const os = require("os");
console.log("free Memory:",os.freemem());
console.log("total Memory:",os.totalmem());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU:", os.cpus());
console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());