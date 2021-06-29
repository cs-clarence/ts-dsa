import { BSTNode } from "./bst-node";

test("Testing BSTNode.value", () => {
  const node = new BSTNode(100);
  expect(node.value).toBe(100);
});

test("Testing BSTNode.right", () => {
  const node = new BSTNode(100);
  const right = new BSTNode(100);
  node.right = right;
  expect(node.right).toBe(right);
});

test("Testing BSTNode.left", () => {
  const node = new BSTNode(100);
  const left = new BSTNode(100);
  node.left = left;
  expect(node.left).toBe(left);
});
