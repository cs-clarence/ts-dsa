import { BSTNode } from "./bst-node";

export class BSTSet<Value> {
  protected _root?: BSTNode<Value>;
  protected _size = 0;

  constructor(...initList: Value[]) {
    for (const value of initList) {
      this.insert(value);
    }
  }

  clear() {
    this._root = undefined;
    this._size = 0;
  }

  contains(value: Value) {
    let currentNode = this._root;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.value <= value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          break;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          break;
        }
      }
    }

    return false;
  }

  insert(value: Value) {
    const newNode = new BSTNode(value);

    if (!this._root) {
      this._root = newNode;
      ++this._size;
      return;
    }

    let currentNode = this._root;

    while (currentNode) {
      if (currentNode.value === value) {
        break;
      } else if (currentNode.value <= value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          ++this._size;
          break;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          ++this._size;
          break;
        }
      }
    }
  }

  get length() {
    return this._size;
  }
}
