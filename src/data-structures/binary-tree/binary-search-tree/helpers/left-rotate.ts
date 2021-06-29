import { BSTNode } from "../bst-node";

export function leftRotate<Value>(node: BSTNode<Value>) {
  // node - this is passed node, it node will left rotate around child node
  //    \
  //     \
  //   child node
  //      /\
  //     /  \
  //   gc1   gc2  (gc means grand child node)
  //
  // expected outcome:
  //       child node
  //         /\
  //        /  \
  //      node  gc2
  //        \
  //         \
  //         gc1
  if (node.right) {
    const temp = node.right; // child node
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
}
