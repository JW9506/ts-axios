const fs = require("fs");

const files = fs.readdirSync(__dirname);
files.forEach((file, index) => {
  files[index] = file.replace(/\.js/, "");
});
const indexJSLoc = files.indexOf("index");
if (indexJSLoc !== -1) {
  files.splice(indexJSLoc, 1);
}

for (const mod of files) {
  exports[mod] = require(`./${mod}`);
}
