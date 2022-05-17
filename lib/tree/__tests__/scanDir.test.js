const path = require('path');
const scanDir = require('../scanDir');
jest.mock('fs');


test('scanDir should return a array [{name:"file1.js"},{name:"file2.txt"},{name:"dir",items:[{name:"file3.js"}]}]', () => {
  const MOCK_FILES_INFO = {
    [path.resolve('c:/file1.js')]: '',
    [path.resolve('c:/file2.txt')]: '',
    [path.resolve('c:/dir')]: '',
    [path.resolve('c:/dir/file3.js')]: ''
  };
  require('fs').__setMockFiles(MOCK_FILES_INFO);
  expect(scanDir(path.resolve('c:/'), 2)).toMatchObject([{name:"file1.js"},{name:"file2.txt"},{name:"dir",items:[{name:"file3.js"}]}]);
});
