import { SinglyLinkedNode } from "./singly-linked-node";

export class SinglyLinkedList<Value> {
  // ! Head and Tail must always point to something, or both point to nothing
  private _head?: SinglyLinkedNode<Value>;
  private _tail?: SinglyLinkedNode<Value>;
  private _size = 0;

  constructor(...values: Value[]) {
    for (const value of values) {
      this.append(value);
    }
  }

  // O(n)
  append(v: Value) {
    const newNode = new SinglyLinkedNode<Value>(v);

    // * Special Case: both head and tail points to nothing/undefined
    if (!this._head && !this._tail) {
      this._head = this._tail = newNode;
    } else {
      const tail = this._tail;
      if (tail) tail.next = newNode;
      this._tail = newNode;
    }
    ++this._size;
    return true;
  }

  // O(n)
  prepend(v: Value) {
    const newNode = new SinglyLinkedNode<Value>(v);

    // * Special Case: both head and tail points to nothing/undefined
    if (!this._head && !this._tail) {
      this._head = this._tail = newNode;
    } else {
      newNode.next = this._head;
      this._head = newNode;
      // console.log(...this);
    }

    ++this._size;
    return true;
  }

  // O(n)
  *[Symbol.iterator]() {
    let currentNode = this._head;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  get length() {
    return this._size;
    // let i = 0;
    // let currentNode = this._head;
    // while (currentNode) {
    //   ++i;
    //   currentNode = currentNode.next;
    // }
    // return i;
  }

  // O(1)
  clear() {
    this._head = this._tail = undefined;
    this._size = 0;
  }

  // O(n) (nodeAt takes O(n))
  at(index: number) {
    return this.nodeAt(index)?.value;
  }

  // O(n)
  nodeAt(index: number) {
    // check if index is inside boundaries
    if (index < 0 || index > this.length - 1) return undefined;

    let currentNode = this._head;
    for (let i = 1; i <= index; ++i, currentNode = currentNode?.next);
    return currentNode;
  }

  // O(n)
  insertAt(index: number, v: Value) {
    // check if the user is just trying to prepend or append
    if (index === 0) return this.prepend(v);
    if (index === this.length) return this.append(v);

    const prevNode = this.nodeAt(index - 1);

    const newNode = new SinglyLinkedNode<Value>(v);

    if (prevNode) prevNode.next = newNode;

    ++this._size;
    return true;
  }

  // O(1)
  popFront() {
    const currentHead = this._head;

    //* Special Case: both tail and head points to the same thing
    //* ...which means that it's either empty or there's only one element in the list
    if (this._tail === this._head) {
      this.clear();
      return currentHead?.value;
    } else if (currentHead) {
      this._head = currentHead.next;
      --this._size;
      return currentHead.value;
    }
  }
}
