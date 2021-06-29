import { BSTNode } from "./bst-node";

export class AVLNode<Value> extends BSTNode<Value> {
  parent?: AVLNode<Value>;
  left?: AVLNode<Value>;
  right?: AVLNode<Value>;
}
