import { SinglyLinkedList } from "../linked-list";

export class Queue<Value> {
  private _deque: SinglyLinkedList<Value>;

  constructor(...value: Value[]) {
    this._deque = new SinglyLinkedList<Value>(...value);
  }

  pop() {
    return this._deque.popFront();
  }

  push(value: Value) {
    return this._deque.pushBack(value);
  }
}
