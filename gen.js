const fs = require('fs');
const mergeSort = require('./lib/mergeSort');
const readable1 = fs.createReadStream('./file1.txt', { highWaterMark: 8 });
const readable2 = fs.createReadStream('./file2.txt', { highWaterMark: 8 });
const readable3 = fs.createReadStream('./file3.txt', { highWaterMark: 8 });
const readable4 = fs.createReadStream('./file4.txt', { highWaterMark: 8 });
const writable = fs.createWriteStream('./fileRes.txt');

let buf = new Map();

async function* read1() {
  for await (const chunk of readable1) {
    yield chunk;
  }
}
async function* read2() {
  for await (const chunk of readable2) {
    yield chunk;
  }
}
async function* read3() {
  for await (const chunk of readable3) {
    yield chunk;
  }
}
async function* read4() {
  for await (const chunk of readable4) {
    yield chunk;
  }
}
const it1 = read1();
const it2 = read2();
const it3 = read3();
const it4 = read4();

(async function() {
  let readStreamNumber = 0;
  while(true) {
    switch (readStreamNumber) {
      case 1:
        buf.set('1', await it1.next());
        break;
      case 2:
        buf.set('2', await it2.next());
        break;
      case 3:
        buf.set('3', await it3.next());
        break;
      case 4:
        buf.set('4', await it4.next());
        break;
      default:
        buf.set('1', await it1.next());
        buf.set('2', await it2.next());
        buf.set('3', await it3.next());
        buf.set('4', await it4.next());
    }

    for (let [key, value] of buf.entries()) {
      if (value.done) {
        buf.delete(key);
      }
    }
    if (buf.size === 0) {
      break;
    }
    let arr = [];
    for (let b of buf.values()) {
      arr.push(+b.value.toString());
    }
    const arrSort = mergeSort(arr);
    for (let [key, value] of buf.entries()) {
      if (+value.value.toString() === arrSort[0]) {
        readStreamNumber = +key;
      }
    }
    writable.write(arrSort[0].toString()+'\n');
  }
})()
