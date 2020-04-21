process.argv = ['node', 'jest']
let outputData = "";
storeLog = inputs => (outputData = inputs);
console["log"] = jest.fn(storeLog);
const tree = require('../tree');

test('tree should contain at least 1 command line argument', (done) => {
  tree().then(() => {
    expect(outputData).toBe("Error: You did not pass a single command line argument");
    done();
  })
});
