import { BSTNode } from "../bst-node";

export function height<Value>(node?: BSTNode<Value>): number {
  if (!node || (!node.left && !node.right)) {
    return 0;
  }

  const nodeLeftHeight = height(node.left) + 1;
  const nodeRightHeight = height(node.right) + 1;

  return nodeLeftHeight > nodeRightHeight ? nodeLeftHeight : nodeRightHeight;
}
