import { BSTNode } from "../bst-node";

export function rightRotate<Value>(node: BSTNode<Value>) {
  //       node - this is passed node, it node will left rotate around child node
  //        /
  //       /
  //   child node
  //      /\
  //     /  \
  //   gc1   gc2  (gc means grand child node)
  //
  // expected outcome:
  //       child node
  //         /\
  //        /  \
  //      gc1  node
  //           /
  //          /
  //         gc2

  if (node.left) {
    const temp = node.left; // child node
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
}
