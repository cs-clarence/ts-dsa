import { BSTNode } from "../bst-node";
import { leftRotate } from "./left-rotate";

test("Testing leftRotate()", () => {
  const node = new BSTNode(0);
  const right = new BSTNode(1);
  const rightLeft = new BSTNode(2);
  node.right = right;
  right.left = rightLeft;

  expect(node.right.left).toBe(rightLeft);

  leftRotate(node);

  expect(right.left).toBe(node);
  expect(node.right).toBe(rightLeft);
});
