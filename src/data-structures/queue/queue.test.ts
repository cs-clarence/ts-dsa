import { Queue } from "./queue";

test("Testing Queue.push() and Queue.pop()", () => {
  const queue = new Queue(1, 2, 3, 4, 5);
  queue.push(6);
  for (let i = 1; i <= 6; ++i) {
    expect(queue.pop()).toBe(i);
  }
});
