import { defaultComparer } from "@/algorithms";

// A generic base class for MinHeap and MaxHeap
export class BinaryHeap<Value> {
  protected _heap: Value[] = [];

  constructor(protected _cmp = defaultComparer) {}

  protected _getLeftNodeIndex(nodeIndex: number) {
    return 2 * (nodeIndex + 1) - 1;
  }

  protected _getRightNodeIndex(nodeIndex: number) {
    return 2 * (nodeIndex + 1);
  }

  push(value: Value) {}

  pop() {}

  clear() {
    this._heap.length = 0;
  }

  get length() {
    return this._heap.length;
  }
}
