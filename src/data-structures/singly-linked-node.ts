export class SinglyLinkedNode<Value> {
  private _next?: SinglyLinkedNode<Value>;

  constructor(private _value: Value, next?: SinglyLinkedNode<Value>) {
    this.next = next;
  }

  get next() {
    return this._next;
  }

  // only manipulate fields here, don't use prev and next getters/setters to prevent confusion and accidents
  set next(newNextNode: SinglyLinkedNode<Value> | undefined) {
    const currentNext = this._next;
    if (newNextNode) {
      newNextNode._next = currentNext;
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
}

test("Testing unlinkNext() of a Node", () => {
  const n = new SinglyLinkedNode<number>(0);
  const next = new SinglyLinkedNode<number>(1);
  n.next = next;
  expect(n.next?.value).toBe(1);
  n.unlinkNext();
  expect(n.next).toBeUndefined();
});
