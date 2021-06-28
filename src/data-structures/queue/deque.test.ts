import { Deque } from "./deque";

test("Testing Deque.pushBack() and Deque.popBack()", () => {
  const deque = new Deque(1, 2, 3, 4, 5);
  deque.pushBack(6);
  for (let i = 6; i > 0; --i) {
    expect(deque.popBack()).toBe(i);
  }
});

test("Testing Deque.pushFront() and Deque.popFront()", () => {
  const deque = new Deque(2, 3, 4, 5, 6);
  deque.pushFront(1);
  for (let i = 1; i <= 6; ++i) {
    expect(deque.popFront()).toBe(i);
  }
});
