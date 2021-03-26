(async () => {

  const fs = require("fs");

  const decompress = require("decompress");
  const fetch = require("cross-fetch");
  const papaparse = require("papaparse");

  const response = await fetch("https://s3.amazonaws.com/crs.csv/crs.csv.zip");
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const files = await decompress(buffer);
  const file = files[0];
  const csv_text = file.data.toString('utf-8');
  console.log("csv_text:", csv_text.substr(0, 100));

  const parsed = papaparse.parse(csv_text, { header: true });
  const rows = parsed.data;

  const defs = rows
  .filter(row => row.code && row.proj4)
  .sort((a, b) => Math.sign(a.code - b.code))
  .map(row => ['EPSG:' + row.code, row.proj4])
  console.log("defs.length:", defs.length);

  fs.writeFileSync("./proj4js-definitions.json", JSON.stringify(defs));
})();