export class DoublyLinkedNode<Value> {
  private _prev?: DoublyLinkedNode<Value>;
  private _next?: DoublyLinkedNode<Value>;

  constructor(
    private _value: Value,
    prev?: DoublyLinkedNode<Value>,
    next?: DoublyLinkedNode<Value>
  ) {
    this.prev = prev;
    this.next = next;
  }

  get prev() {
    return this._prev;
  }

  // only manipulate fields here, don't use prev and next getters/setters to prevent confusion and accidents
  set prev(newPrevNode: DoublyLinkedNode<Value> | undefined) {
    // check if this Node has a Prev Node linked to it, if so, set Prev Node's Prev to New Prev Node
    const currentPrev = this._prev;
    if (currentPrev) currentPrev._next = newPrevNode;

    if (newPrevNode) {
      newPrevNode._prev = currentPrev;
      newPrevNode._next = this;
    }
    this._prev = newPrevNode;
  }

  get next() {
    return this._next;
  }

  // only manipulate fields here, don't use prev and next getters/setters to prevent confusion and accidents
  set next(newNextNode: DoublyLinkedNode<Value> | undefined) {
    // check if this Node has a Next Node linked to it, if so, set Next Node's Prev to New Next Node
    const currentNext = this._next;
    if (currentNext) currentNext._prev = newNextNode;

    if (newNextNode) {
      newNextNode._next = currentNext;
      newNextNode._prev = this;
    }

    this._next = newNextNode;
  }

  get value() {
    return this._value;
  }

  set value(v: Value) {
    this._value = v;
  }

  unlinkNext() {
    this.next = undefined;
  }

  unlinkPrev() {
    this.prev = undefined;
  }
}
