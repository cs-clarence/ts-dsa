import hash from "object-hash";

export class HashSet<Value> {
  // * A HastTable must have atleast one element before hashing (module by 0 is undefined)
  // * If the size of any of the buckets becomes equivalent or greater than the total number of buckets * maxLoadFactor,
  // * it must reserve more space and rehash all it's elements to prevent slowdown

  private _buckets: (Value[] | undefined)[];

  constructor(nBuckets: number = 0, private maxLoadFactor: number = 1) {
    this._buckets = new Array(nBuckets);
  }

  get length() {
    let len = 0;
    for (const bucket of this._buckets) {
      if (bucket) {
        len += bucket.length;
      }
    }
    return len;
  }

  reserve(size: number) {
    const previous_bucket = this._buckets;
    this._buckets = new Array(previous_bucket.length + size);
    for (const bucket of previous_bucket) {
      if (bucket) {
        for (const value of bucket) this.insert(value);
      }
    }
  }

  insert(v: Value) {
    let hash = this._hash(v);
    let bucket = this._buckets[hash];

    if (bucket) {
      if (this.contains(v)) return;

      const bucketsLength = this._buckets.length;
      if (bucket.length >= bucketsLength * this.maxLoadFactor) {
        this.reserve(bucketsLength <= 0 ? 1 : bucketsLength * 2);
        hash = this._hash(v);
        bucket = this._buckets[hash];
        if (!bucket) bucket = this._buckets[hash] = [];
      }
    } else {
      bucket = this._buckets[hash] = [];
    }
    bucket.push(v);
  }

  contains(v: Value) {
    const index = this._hash(v);
    const bucket = this._buckets[index];
    if (bucket) {
      for (const element of bucket) if (element === v) return true;
    }
    return false;
  }

  *[Symbol.iterator]() {
    for (const bucket of this._buckets)
      if (bucket) for (const element of bucket) yield element;
  }

  clear() {
    this._buckets.length = 0;
  }

  private _hash(v: Value): number {
    //! a bucket needs to have at least 1 element in it to perform the modulo operation
    //! the modulo operation isn't possible with a length of 0 because it is undefined
    //! so insert at one element if the bucket is empty
    if (this._buckets.length === 0) this._buckets.push([]);

    const hashString = hash(v, { encoding: "hex", algorithm: "sha1" });
    const hashedInt = parseInt(hashString, 16);
    return hashedInt % this._buckets.length;
  }
}
