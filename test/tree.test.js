process.argv = ['node', 'jest', './notFound', '-d', '1']
let outputData = "";
storeLog = inputs => (outputData = inputs);
console["log"] = jest.fn(storeLog);
const tree = require('../tree');

test("tree console.log === Error: directory: ./notFound does not exist", (done) => {
  tree().then(() => {
    expect(outputData).toBe("Error: directory: ./notFound does not exist");
    done();
  })
});
