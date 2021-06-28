import { Stack } from "./stack";

test("Testing Stack.push() and Stack.pop()", () => {
  const stack = new Stack(1, 2, 3, 4, 5);
  stack.push(6);
  for (let i = 6; i > 0; --i) {
    expect(stack.pop()).toBe(i);
  }
});
