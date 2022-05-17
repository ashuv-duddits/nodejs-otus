const drawTree = require('../drawTree');

test('drawTree should return a string /├── 10\\n│ {3}├── 15\\n│ {3}└── undefined\\n│ {7}└── 17\\n└── 20\\n {4}└── 30\\n {8}└── 40/', () => {
  const tree = {
    items: [
      {
        name: 10,
        items: [
          {
            name: 15
          },
          {
            items: [
              {
                name: 17
              }
            ]
          }
        ]
      },
      {
        name: 20,
        items: [
          {
            name: 30,
            items: [
              {
                name: 40
              }
            ]
          }
        ]
      }
    ]
  }
  expect(drawTree(tree)).toMatch(/├── 10\n│ {3}├── 15\n│ {3}└── undefined\n│ {7}└── 17\n└── 20\n {4}└── 30\n {8}└── 40/);
});
