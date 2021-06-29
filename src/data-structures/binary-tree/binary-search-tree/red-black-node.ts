import { BSTNode } from "./bst-node";

export class RedBlackNode<Value> extends BSTNode<Value> {
  parent?: RedBlackNode<Value>;
  right?: RedBlackNode<Value>;
  left?: RedBlackNode<Value>;
}
