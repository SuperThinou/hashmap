export class HashSet {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(value) {
    const hashCode = this.hash(value);
    const index = Math.abs(hashCode) % this.capacity;

    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === value) {
        return;
      }
    }

    bucket.push(value);

    // Load factor check
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
      console.log("Resized! Buckets capacity is now: " + this.capacity);
    }
  }

  length() {
    return this.size;
  }
}
