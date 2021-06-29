import { BSTNode } from "../bst-node";
import { rightRotate } from "./right-rotate";

test("Testing rightRotate()", () => {
  const node = new BSTNode(0);
  const left = new BSTNode(1);
  const leftRight = new BSTNode(2);

  node.left = left;
  left.right = leftRight;

  expect(node.left.right).toBe(leftRight);

  rightRotate(node);

  expect(left.right).toBe(node);
  expect(node.left).toBe(leftRight);
});
