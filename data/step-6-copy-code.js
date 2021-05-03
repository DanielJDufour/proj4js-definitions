const fs = require("fs");

fs.copyFileSync("./defs.js", "../proj4js-definitions.js");
console.log("copied");

console.log("completed step 6");
