import { BSTNode } from "./bst-node";

export class BSTMap<Key, Value> {
  protected _root?: BSTNode<[Key, Value]>;
  protected _size = 0;

  constructor(...initList: [Key, Value][]) {
    for (const [key, value] of initList) {
      this.set(key, value);
    }
  }

  get(key: Key) {
    let currentNode = this._root;

    while (currentNode) {
      if (currentNode.value[0] === key) {
        return currentNode.value[1];
      } else if (currentNode.value[0] <= key) {
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
  }

  set(key: Key, value: Value) {
    const newNode = new BSTNode<[Key, Value]>([key, value]);

    if (!this._root) {
      this._root = newNode;
      ++this._size;
      return;
    }

    let currentNode = this._root;

    while (currentNode) {
      if (currentNode.value[0] === key) {
        currentNode.value[1] = value;
        break;
      } else if (currentNode.value[0] <= key) {
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

  clear() {
    this._root = undefined;
    this._size = 0;
  }
}
