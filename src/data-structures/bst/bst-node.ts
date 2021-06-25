export class BSTNode<T> {
  constructor(
    private _value: T,
    private _left?: BSTNode<T>,
    private _right?: BSTNode<T>
  ) {}

  get left() {
    return this._left;
  }

  set left(left: BSTNode<T> | undefined) {
    this._left = left;
  }

  get right() {
    return this._right;
  }

  set right(right: BSTNode<T> | undefined) {
    this._right = right;
  }

  get value() {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }
}
