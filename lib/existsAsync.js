const fs = require('fs');

const existsAsync = (path) => {
  return new Promise((resolve) => {
    fs.access(path, fs.F_OK, (err) => {
      if (err) {
        resolve(false);
        return;
      }
      resolve(true);
    })
  })
};

module.exports = existsAsync;

