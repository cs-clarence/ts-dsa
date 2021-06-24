import { DoublyLinkedList } from "./doubly-linked-list";

test("Testing nodeAt() and at()", () => {
  const list = new DoublyLinkedList<number>(0, 1, 2, 3);
  expect(list.nodeAt(3)?.value).toBe(3);
  expect(list.at(2)).toBe(2);
});

test("Testing append(), popBack() and length", () => {
  const list = new DoublyLinkedList<number>();
  for (let i = 0; i < 5; ++i) list.append(i);
  for (let i = 4; i >= 0; --i) expect(list.popBack()).toBe(i);
  expect(list.length).toBe(0);
});

test("Testing prepend(), popFront() and length", () => {
  const list = new DoublyLinkedList<number>();
  for (let i = 0; i < 5; ++i) list.prepend(i);
  for (let i = 4; i >= 0; --i) expect(list.popFront()).toBe(i);
  expect(list.length).toBe(0);
});

test("Testing insertAt() and length", () => {
  const list = new DoublyLinkedList<number>(1, 3);
  list.insertAt(0, 0);
  expect(list.at(0)).toBe(0);
  list.insertAt(3, 4);
  console.log(...list);
  expect(list.at(3)).toBe(4);
  list.insertAt(2, 2);
  expect(list.at(2)).toBe(2);
  for (let i = 0; i < 5; ++i) expect(list.at(i)).toBe(i);
  expect(list.length).toBe(5);
});

test("Testing popAt() and length", () => {
  const list = new DoublyLinkedList<number>(1, 2, 3);
  expect(list.popAt(1)).toBe(2);
  expect(list.length).toBe(2);
});

test("Testing clear()", () => {
  const list = new DoublyLinkedList<number>(1, 2, 3, 4, 5);
  list.clear();
  expect(list.length).toBe(0);
});
