import { SinglyLinkedList } from "./singly-linked-list";

test("Testing nodeAt() and at()", () => {
  const list = new SinglyLinkedList<number>(0, 1, 2, 3);
  expect(list.nodeAt(3)?.value).toBe(3);
  expect(list.at(2)).toBe(2);
  expect(list.at(100)).toBeUndefined();
  expect(list.at(-1)).toBeUndefined();
});

test("Testing append() and legth", () => {
  const list = new SinglyLinkedList<number>();
  for (let i = 0; i < 5; ++i) list.append(i);
  for (let i = 4; i >= 0; --i) expect(list.at(i)).toBe(i);
  expect(list.length).toBe(5);
});

test("Testing prepend(), popFront() and length", () => {
  const list = new SinglyLinkedList<number>();
  for (let i = 0; i < 5; ++i) list.prepend(i);
  for (let i = 4, j = 0; i >= 0; --i, ++j) expect(list.at(j)).toBe(i);
  expect(list.length).toBe(5);

  console.log(...list);
  for (let i = 4; i >= 0; --i) expect(list.popFront()).toBe(i);
  expect(list.length).toBe(0);
});

test("Testing clear()", () => {
  const list = new SinglyLinkedList<number>(1, 2, 3, 4, 5);
  list.clear();
  expect(list.length).toBe(0);
});

test("Testing [Symbol.iterator]()", () => {
  const list = new SinglyLinkedList<number>(0, 1, 2, 3, 4);
  let i = 0;
  for (const item of list) {
    expect(item).toBe(i);
    ++i;
  }
});

test("Testing insertAt() and length", () => {
  const list = new SinglyLinkedList<number>();

  list.insertAt(0, 0);
  // 0 = 0
  expect(list.at(0)).toBe(0);
  expect(list.length).toBe(1);
  // console.log(...list);

  list.insertAt(1, 4);
  // (0 = 0), (1 = 4);
  expect(list.at(1)).toBe(4);
  expect(list.length).toBe(2);
  // console.log(...list);

  list.insertAt(1, 2);
  // 0 = 0, 1 = 2, 2 = 4
  expect(list.at(1)).toBe(2);
  expect(list.length).toBe(3);
  // console.log(...list);

  list.insertAt(1, 1);
  // 0 = 0, 1 = 1, 2 = 2, 3 = 4
  expect(list.at(1)).toBe(1);
  expect(list.length).toBe(4);
  // console.log(...list);

  list.insertAt(3, 3);
  // 0 = 0, 1 = 1, 2 = 2, 3 = 3, 4 = 4
  expect(list.at(3)).toBe(3);
  expect(list.length).toBe(5);
  // console.log(...list);

  let i = 0;
  for (const item of list) {
    expect(item).toBe(i);
    ++i;
  }
});
