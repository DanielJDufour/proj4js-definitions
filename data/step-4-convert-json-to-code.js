const fs = require("fs");
const jsonToCode = require("json-to-code");

const defs = require("./modified-defs.json");

const { code } = jsonToCode.encode({ data: defs });

fs.writeFileSync("modified-defs.js", code, "utf-8");

console.log("completed step 4");
