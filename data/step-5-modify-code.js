const fs = require("fs");

let source_code = fs.readFileSync("./modified-defs.js", "utf-8");

// remove trailing ;
source_code = source_code.substring(0, source_code.length - 1);
console.log("end of source_code:", [source_code.substr(-10)]);

source_code += `\n.reduce((acc, it, i) => {
  if (i % 2 === 0) {
    // v is the addition in EPSG code
    const cur = acc.prev + it;
    const code = "EPSG:" + cur;
    acc.defs.push([code]);
    acc.prev = cur;
  } else {
    // v is the proj4 text
    acc.defs[acc.defs.length - 1].push(it);
  }
  return acc;
}, { defs: [], prev: 0 }).defs;`

const out_file_name = "./defs.js";
fs.writeFileSync(out_file_name, source_code, "utf-8");

console.log("completed step 5");
