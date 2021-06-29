import { BinaryHeap } from "./binary-heap";

export class MaxHeap<Value> extends BinaryHeap<Value> {
  constructor(initList: Value[]) {
    // set comparer so that it becomes a MaxHeap
    super((a, b) => (a > b ? -1 : a < b ? 1 : 0));

    for (const item of initList) {
      this.push(item);
    }
  }
}
