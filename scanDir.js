const fs = require('fs');
const path = require('path');

const scanDir = (pathDir, d, depth = 1) => {
  const result = [];
  fs.readdirSync(pathDir).forEach((name) => {
    if (fs.statSync(path.join(pathDir, name)).isDirectory() && depth < d) {
      result.push({
        name,
        items: scanDir(path.join(pathDir, name), d, depth + 1)
      });
    } else {
      result.push({
        name
      });
    }
  });
  return result;
};

module.exports = scanDir;
