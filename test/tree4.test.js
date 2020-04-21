process.argv = ['node', 'jest', './test', '-d', '1']
let outputData = "";
storeLog = inputs => (outputData = inputs);
console["log"] = jest.fn(storeLog);
const tree = require('../tree');

test("tree console.log === ├── tree.test.js\n├── tree2.test.js\n├── tree3.test.js\n└── tree4.test.js\n", (done) => {
  tree().then(() => {
    expect(outputData).toBe("├── tree.test.js\n├── tree2.test.js\n├── tree3.test.js\n└── tree4.test.js\n");
    done();
  })
});
