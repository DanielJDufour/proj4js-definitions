const fs = require("fs");
const { map } = require("advarr");

let defs = require("./defs.json");

defs = map(defs, ({ it, first, i }) => {
  if (typeof it === "string") {
    return it;
  } else if (typeof it === "number") {
    const minuend = it;
    const subtrahend = first ? 0 : defs[i - 2];
    const diff = minuend - subtrahend;
    return diff;  
  }
});

fs.writeFileSync("./modified-defs.json", JSON.stringify(defs));

console.log("completed step 3");
