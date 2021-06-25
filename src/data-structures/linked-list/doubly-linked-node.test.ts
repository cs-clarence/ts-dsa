import { DoublyLinkedNode } from "./doubly-linked-node";
const currentNode = new DoublyLinkedNode<number>(1);

test("Linking a New Node the the Current Node's Next", () => {
  currentNode.next = new DoublyLinkedNode<number>(3);
});

test("Checking the Prescence of the New Node to the Current Node's Next", () => {
  expect(currentNode.value).toBe(1);
  expect(currentNode.next?.value).toBe(3);
});

test("Checking if Current Node and Next Node are Propertly Linked Together", () => {
  expect(currentNode.next !== undefined).toBe(true);
  expect(currentNode === currentNode.next?.prev).toBe(true);
  expect(currentNode.next?.next).toBeUndefined();
});

test("Linking a New Node the the Current Node's Prev", () => {
  currentNode.prev = new DoublyLinkedNode<number>(-1);
});

test("Checking the Prescence of the New Node to the Current Node's Next", () => {
  expect(currentNode.value).toBe(1);
  expect(currentNode.prev?.value).toBe(-1);
});

test("Checking if Current Node and Next Node are Propertly Linked Together", () => {
  expect(currentNode.prev !== undefined).toBe(true);
  expect(currentNode === currentNode.prev?.next).toBe(true);
  expect(currentNode.prev?.prev).toBeUndefined();
});

test("Inserting a New Node in Between Current Node and it's Next Node", () => {
  currentNode.next = new DoublyLinkedNode<number>(2);
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
  expect(
    currentNode.next === newlyInsertedNode &&
      newlyInsertedNode?.prev === currentNode
  ).toBe(true);

  expect(currentNodeNext !== undefined).toBe(true);
  expect(
    newlyInsertedNode?.next === currentNodeNext &&
      currentNodeNext?.prev === newlyInsertedNode
  ).toBe(true);
});

test("Inserting a New Node in Between Current Node and it's Prev Node", () => {
  currentNode.prev = new DoublyLinkedNode<number>(0);
});

test("Checking the Prescence of the Newly Inserted Node between Current Node and it's Next Node", () => {
  expect(currentNode.value).toBe(1);
  expect(currentNode.prev?.value).toBe(0);
  expect(currentNode.prev?.prev?.value).toBe(-1);
});

test("Checking if Current Node, Newly Inserted Node and Prev Node are Properly Linked Together", () => {
  const newlyInsertedNode = currentNode.prev;
  const currentNodePrev = currentNode.prev?.prev;

  expect(newlyInsertedNode !== undefined).toBe(true);
  expect(
    currentNode.prev === newlyInsertedNode &&
      newlyInsertedNode?.next === currentNode
  ).toBe(true);

  expect(currentNodePrev !== undefined).toBe(true);
  expect(
    newlyInsertedNode?.prev === currentNodePrev &&
      currentNodePrev?.next === newlyInsertedNode
  ).toBe(true);
});

test("Testing unlinkNext() of a Node", () => {
  const n = new DoublyLinkedNode<number>(0);
  const next = new DoublyLinkedNode<number>(1);
  n.next = next;
  expect(n.next?.value).toBe(1);
  n.unlinkNext();
  expect(n.next).toBeUndefined();
  expect(next.prev).toBeUndefined();
});

test("Testing unlinkPrev() of a Node", () => {
  const n = new DoublyLinkedNode<number>(0);
  const prev = new DoublyLinkedNode<number>(1);
  n.prev = prev;
  expect(n.prev?.value).toBe(1);
  n.unlinkPrev();
  expect(n.prev).toBeUndefined();
  expect(prev.next).toBeUndefined();
});

test("Doing Complex Series of Tests That Involves Iterating Through the list of Nodes Starting from Head", () => {
  // keep a reference to head
  let head = currentNode;
  while (head.prev) {
    head = head.prev;
  }

  // ...and the tail of the list
  let tail = currentNode;
  while (tail.next) {
    tail = tail.next;
  }

  // go forward
  let h: DoublyLinkedNode<number> | undefined = head;
  for (let i = -1; i <= 3; ++i) {
    expect(h?.value).toBe(i);
    h = h?.next;
  }

  // go backwards
  let t: DoublyLinkedNode<number> | undefined = tail;
  for (let i = 3; i >= -1; --i) {
    expect(t?.value).toBe(i);
    t = t?.prev;
  }
});
