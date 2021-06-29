import { BSTNode } from "../bst-node";
import { height } from "./height";

test("Testing height()", () => {
  const root = new BSTNode(0);
  const left = new BSTNode(1);
  const right = new BSTNode(2);
  const leftLeft = new BSTNode(3);
  const rightRight = new BSTNode(4);

  root.left = left;
  root.right = right;
  root.right && (root.right.right = rightRight);
  root.left && (root.left.left = leftLeft);

  expect(height(root)).toBe(2);
});
