const fs = require("fs");
const decompress = require("decompress");
const fetch = require("cross-fetch");

(async () => {
  const response = await fetch("https://s3.amazonaws.com/crs.csv/crs.csv.zip");
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const files = await decompress(buffer);
  const file = files[0];
  const csv_text = file.data.toString('utf-8');
  console.log("csv_text:", csv_text.substr(0, 100));
  fs.writeFileSync("crs.csv", csv_text);
  console.log("completed step 1");
})();
