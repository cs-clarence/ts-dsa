import { AVLNode } from "./avl-node";
import { BSTSet } from "./bst-set";

export class AVLSet<Value> extends BSTSet<Value> {
  protected _root?: AVLNode<Value>;

  // insert(value: Value) {
  //   const newNode = new AVLNode(value);

  //   if (!this._root) this._root = newNode;
  // }
}
