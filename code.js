const textNodesWithNoTextStyle = figma.currentPage.findAll(node => node.type === "TEXT" && node.textStyleId === "");
const textNodesWithNoFillStyle = figma.currentPage.findAll(node => node.type === "TEXT" && node.fillStyleId === "");
const detachedNodes = figma.currentPage.findAll(node => (node.type != "INSTANCE" && node.type === "FRAME") && (node.name.search("/") > -1) && (node.name.search("_") === -1));
console.log("No text style found for " + textNodesWithNoTextStyle.length + " Text Layers");
console.log("No fill style found for " + textNodesWithNoTextStyle.length + " Text Layers");
console.log("There are " + detachedNodes.length + " Detached Components");
figma.closePlugin();
