import { SinglyLinkedNode } from "./singly-linked-node";
const currentNode = new SinglyLinkedNode<number>(1);

test("Linking a New Node the the Current Node's Next", () => {
  currentNode.next = new SinglyLinkedNode<number>(3);
});

test("Checking the Prescence of the New Node to the Current Node's Next", () => {
  expect(currentNode.value).toBe(1);
  expect(currentNode.next?.value).toBe(3);
});

test("Checking if Current Node and Next Node are Propertly Linked Together", () => {
  expect(currentNode.next !== undefined).toBe(true);
  expect(currentNode.next?.next).toBeUndefined();
});

test("Inserting a New Node in Between Current Node and it's Next Node", () => {
  currentNode.next = new SinglyLinkedNode<number>(2);
});

test("Checking the Prescence of the Newly Inserted Node between Current Node and it's Next Node", () => {
  expect(currentNode.value).toBe(1);
  expect(currentNode.next?.value).toBe(2);
  expect(currentNode.next?.next?.value).toBe(3);
});

test("Checking if Current Node, Newly Inserted Node and Next Node are Properly Linked Together", () => {
  const newlyInsertedNode = currentNode.next;
  const currentNodeNext = currentNode.next?.next;

  expect(newlyInsertedNode !== undefined).toBe(true);
  expect(currentNode.next === newlyInsertedNode).toBe(true);

  expect(currentNodeNext !== undefined).toBe(true);
  expect(newlyInsertedNode?.next === currentNodeNext).toBe(true);
});

test("Doing Complex Series of Tests That Involves Iterating Through the list of Nodes Starting from Head", () => {
  // keep a reference to head
  let head = currentNode;

  // go forward
  let h: SinglyLinkedNode<number> | undefined = head;
  for (let i = 1; i <= 3; ++i) {
    expect(h?.value).toBe(i);
    h = h?.next;
  }
});
