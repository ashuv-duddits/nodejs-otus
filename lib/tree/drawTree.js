const drawTree = (tree, prefix = "") => {
  let result = "";
  tree.items.forEach((e, i, items) => {
    const lastNode = i === items.length - 1;
    result += `${prefix}${lastNode ? "└──" : "├──"} ${e.name}\n`;
    if (e.items) result += drawTree(e, `${prefix}${lastNode ? "   " : "│  "} `);
  });
  return result;
};
module.exports = drawTree;
