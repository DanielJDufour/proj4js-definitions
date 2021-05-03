const fs = require("fs");

const data = require("./defs");
const json = JSON.stringify(data);

fs.writeFileSync("../proj4js-definitions.json", json, "utf-8");

console.log("completed step 7");
