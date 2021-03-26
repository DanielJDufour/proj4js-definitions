# proj4js-defs
Almost All the Projection Definitions for Proj4js

# install
```bash
npm install proj4js-defs
```

# usage in code
```bash
const defs = require("proj4js-defs");
```
defs are an array
```
[
  [
    'EPSG:2000',
    '+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +units=m +no_defs'
  ],
  [
    'EPSG:2001',
    '+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=-255,-15,71,0,0,0,0 +units=m +no_defs'
  ],
  [
    'EPSG:2002',
    '+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=725,685,536,0,0,0,0 +units=m +no_defs'
  ],
  [
    'EPSG:2003',
    '+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=72,213.7,93,0,0,0,0 +units=m +no_defs'
  ],
  ... 4700+ more items
]
```
After loading the defs update your proj4 projector with
```
const proj4 = require("proj4");

proj4.defs(defs);
```