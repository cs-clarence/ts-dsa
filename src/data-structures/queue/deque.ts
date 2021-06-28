import { DoublyLinkedList } from "../linked-list";

export class Deque<Value> {
  private _deque: DoublyLinkedList<Value>;

  constructor(...value: Value[]) {
    this._deque = new DoublyLinkedList<Value>(...value);
  }

  pushFront(value: Value) {
    return this._deque.pushFront(value);
  }

  popFront() {
    return this._deque.popFront();
  }

  pushBack(value: Value) {
    return this._deque.pushBack(value);
  }

  popBack() {
    return this._deque.popBack();
  }
}
