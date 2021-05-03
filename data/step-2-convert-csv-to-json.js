const fs = require("fs");
const papaparse = require("papaparse");

const csv_text = fs.readFileSync("./crs.csv", "utf-8");
const parsed = papaparse.parse(csv_text, { header: true });
const rows = parsed.data;
const defs = rows
.filter(row => row.code && row.proj4)
.sort((a, b) => Math.sign(a.code - b.code))
.map(row => [parseInt(row.code), row.proj4])
// .map(([code, def], i, arr) => [code - (arr[i - 1] || [0])[0], def])
.flat();
console.log("defs.length:", defs.length);

/* Step 3: Save JSON */
fs.writeFileSync("./defs.json", JSON.stringify(defs));

console.log("completed step 2");

