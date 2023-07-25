export class Tree {
  constructor(rootNode = null) {
    this.rootNode = rootNode;
  }

  get rootNode() {
    return this.rootNode;
  }

  deleteNode(node) {
    if (!node) {
      return;
    }
    this.deleteNode(node.leftChildren);
    this.deleteNode(node.rightChildren);
    node = null;
  }
}
