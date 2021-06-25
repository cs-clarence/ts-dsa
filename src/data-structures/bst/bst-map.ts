import { BSTNode } from "./bst-node";

export class BSTMap<Key, Value> {
  private _root?: BSTNode<[Key, Value]>;

  constructor(initList: [Key, Value][]) {}
}
