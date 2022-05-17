process.argv = ['node', 'jest', './test/tree.test.js', '-d', '1']
let outputData = "";
storeLog = inputs => (outputData = inputs);
console["log"] = jest.fn(storeLog);
const tree = require('../tree');

test("tree console.log === Error: directory: ./test/tree.test.js does not exist", (done) => {
  tree().then(() => {
    expect(outputData).toBe("Error: directory: ./test/tree.test.js not a directory");
    done();
  })
});
