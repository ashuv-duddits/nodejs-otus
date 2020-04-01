// Написать функцию для показа древовидной структуры.
// Пример запуска программы:
// npm start
// 1
// ├── 2
// │   └── 3
// │   └── 4
// └── 5
//     └── 6
const tree = require("./tree");

const drawTree = (tree, prefix = "") => {
  let result = "";
  tree.items.forEach((e, i, items) => {
    const lastNode = i === items.length - 1;
    result += `${prefix}${lastNode ? "└──" : "├──"} ${e.name}\n`;
    if (e.items) result += drawTree(e, `${prefix}${lastNode ? "   " : "│  "} `);
  });
  return result;
};
console.log("npm start");
console.log(tree.name);
console.log(drawTree(tree));
