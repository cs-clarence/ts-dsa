export class Stack<Value> {
  private _stack: Value[];
  constructor(...values: Value[]) {
    this._stack = [...values];
  }
  push(...value: Value[]) {
    this._stack.push(...value);
  }
  pop() {
    return this._stack.pop();
  }
}
