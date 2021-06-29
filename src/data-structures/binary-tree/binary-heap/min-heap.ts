import { BinaryHeap } from "./binary-heap";

export class MinHeap<Value> extends BinaryHeap<Value> {
  constructor(initList: Value[]) {
    super();
    for (const item of initList) {
      this.push(item);
    }
  }
}
