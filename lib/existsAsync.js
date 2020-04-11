const fs = require('fs');

const existsAsync = (path) => {
  return new Promise((resolve, reject) => {
    fs.access(path, fs.F_OK, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    })
  })
};

module.exports = existsAsync;

