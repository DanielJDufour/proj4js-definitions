const test = require("flug");
const fs = require("fs");

test("equality", ({ eq }) => {
  const original_defs = JSON.parse(fs.readFileSync("./data/defs.json", "utf-8")).reduce((acc, it, i) => {
    if (i % 2 === 0) acc.push([ 'EPSG:' + it ]);
    else acc[acc.length - 1].push(it);
    return acc;
  }, []);

  const new_defs = require("./proj4js-definitions.js");
  eq(original_defs, new_defs);
});

test("equality of legacy", ({ eq }) => {
  eq(
    require("./proj4js-definitions.js"),
    require("./proj4js-definitions.json"),
  );
});
