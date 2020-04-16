const fs = require('fs');
const mergeSort = require('../mergeSort');
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = []
for (let i = 0; i < 3000000; i++) {
  let randomNumber = getRandomInRange(1, 9999999);
  arr.push(randomNumber);
}
arr = mergeSort(arr);
arr = arr.map((number) => {
  let fixedLengthNumber = number.toString();
  while(fixedLengthNumber.length < 7) {
    fixedLengthNumber = `0${fixedLengthNumber}`;
  }
  return fixedLengthNumber;
})
fs.appendFileSync("file4.txt", arr.join('\n'));
