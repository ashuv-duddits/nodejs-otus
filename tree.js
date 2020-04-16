const fs = require('fs');
const path = require('path');
const drawTree = require('./drawTree');
const scanDir = require('./scanDir');
const existsAsync = require('./lib/existsAsync');

const argv = process.argv.slice(2);
const args = new Map();
argv.forEach((key, i) => {
  if (key.startsWith('--') || key.startsWith('-')) {
    args.set(key, argv[i+1]);
  }
});
const d = args.get('--depth') || args.get('-d') || 1;

const directory = argv[0];

(async () => {
  if (!directory) {
    console.log('Error: You did not pass a single command line argument');
    process.exit(1);
  }
  const exists = await existsAsync(directory);
  if (!exists) {
    console.log(`Error: directory: ${directory} does not exist`);
    return;
  }
  if (!fs.statSync(directory).isDirectory()) {
    console.log(`Error: directory: ${directory} does not exist`);
    process.exit(1);
  }
  const json = {
    name: path.parse(directory).name,
    items: scanDir(directory, d)
  };
  console.log(json.name);
  console.log(drawTree(json));
})();
