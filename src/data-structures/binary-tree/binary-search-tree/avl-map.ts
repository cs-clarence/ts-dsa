import { AVLNode } from "./avl-node";
import { BSTMap } from "./bst-map";

export class AVLMap<Key, Value> extends BSTMap<Key, Value> {
  protected _root?: AVLNode<[Key, Value]>;
}
