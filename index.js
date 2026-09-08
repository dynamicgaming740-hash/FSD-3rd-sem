console.log("HELLO WORLD");
console.log("3+6=" + (3 + 6));
console.log("this is a simpple javascript program");
console.log("goodbye");
console.log("this is warning message");
console.log("this is an informational message");
console.log("this is debug message");
console.log("this is an error message");
console.log(process.platform);
console.log(global.Lnumber);
global.Lnumber = "51";
console.log(global.Lnumber);
//process.on("exit", function (code) exist in an calling function.
 const{ EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch',() => {
    console.log('Welcome to lunch');
});
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');