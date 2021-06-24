import { DoublyLinkedNode } from "./doubly-linked-node";

export class DoublyLinkedList<Value> {
  // ! Head and Tail must always point to something, or both point to nothing
  private _head?: DoublyLinkedNode<Value>;
  private _tail?: DoublyLinkedNode<Value>;
  private _size = 0;

  constructor(...values: Value[]) {
    for (const value of values) {
      this.append(value);
    }
  }

  append(v: Value) {
    const newNode = new DoublyLinkedNode<Value>(v);

    // Special Case: both head and tail points to nothing/undefined
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

  prepend(v: Value) {
    const newNode = new DoublyLinkedNode<Value>(v);

    // Special Case: both head and tail points to nothing/undefined
    if (!this._head && !this._tail) {
      this._head = this._tail = newNode;
    } else {
      const head = this._head;
      if (head) head.prev = newNode;
      this._head = newNode;
    }
    ++this._size;
    return true;
  }

  *[Symbol.iterator]() {
    let currentNode = this._head;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  get length() {
    // return this._size;
    let i = 0;
    let currentNode = this._head;
    while (currentNode) {
      ++i;
      currentNode = currentNode.next;
    }
    return i;
  }

  clear() {
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
  }

  at(index: number) {
    return this.nodeAt(index)?.value;
  }

  nodeAt(index: number) {
    let currentNode = this._head;
    for (let i = 1; i <= index; ++i, currentNode = currentNode?.next);
    return currentNode;
  }

  insertAt(index: number, v: Value) {
    // check if the user is just trying to prepend or append
    if (index === 0) return this.prepend(v);
    if (index === this.length - 1) return this.append(v);

    const currenteNode = this.nodeAt(index);

    if (!currenteNode) return false;

    const newNode = new DoublyLinkedNode<Value>(v);

    if (currenteNode.prev) currenteNode.prev.next = newNode;
    currenteNode.prev = newNode;
    ++this._size;
    return true;
  }

  popAt(index: number) {
    // check first if the user just wants to popBack (index is size - 1) or popFront (inde is 0)
    // if true, use the popBack and popFront functions instead to the head and tail can move accordingly
    if (index === 0) return this.popFront();
    if (index === this._size - 1) return this.popBack();

    const node = this.nodeAt(index);
    if (node) {
      node.next && (node.next.prev = node.prev);
      --this._size;
    }
    return node?.value;
  }

  popBack() {
    const currentTail = this._tail;

    //* Special Case: both tail and head points to the same thing
    //* ...which means that it's either empty or there's only one element in the list
    if (this._tail === this._head) {
      this._head = this._tail = undefined;
      return currentTail?.value;
    } else if (currentTail) {
      this._tail = currentTail.prev;
      if (this._tail) this._tail.unlinkNext();
      --this._size;
      return currentTail.value;
    }
  }

  popFront() {
    const currentHead = this._head;

    //* Special Case: both tail and head points to the same thing
    //* ...which means that it's either empty or there's only one element in the list
    if (this._tail === this._head) {
      this._head = this._tail = undefined;
      return currentHead?.value;
    } else if (currentHead) {
      this._head = currentHead.next;
      if (this._head) this._head.unlinkPrev();
      --this._size;
      return currentHead.value;
    }
  }
}