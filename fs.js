const fs = require("fs");
//create
fs.writeFileSync("data.txt", "Hello World");
//Read
console.log(fs.readFileSync("data.txt", "utf-16le"));
//Update
fs.appendFileSync("data.txt", "\nWelcome to Node.js");
//Read Updated Data
console.log(fs.readFileSync("data.txt", "utf-16le"));
//Delete
fs.unlinkSync("data.txt");
console.log("File Deleted Successfully");
