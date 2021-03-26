const { strictEqual } = require("assert");
const fs = require("fs");

const defs = require("./proj4js-defs.json");

strictEqual(defs.length > 4000, true);