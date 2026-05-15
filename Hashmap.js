export class Hashmap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const index = Math.abs(hashCode) % this.capacity;

    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const entry = bucket[i];

      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    bucket.push({
      key: key,
      value: value,
    });
  }

  get(key) {
    const hashCode = this.hash(key);
    const index = Math.abs(hashCode) % this.capacity;
    const bucket = this.buckets[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      const entry = this.buckets[index][i];

      if (entry.key === key) {
        return entry.value;
      }
    }

    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    const index = Math.abs(hashCode) % this.capacity;
    const bucket = this.buckets[index];

    if (!bucket) {
      return false;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      const entry = bucket[i];

      if (entry.key === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    const index = Math.abs(hashCode) % this.capacity;
    const bucket = this.buckets[index];

    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      const entry = bucket[i];

      if (entry.key === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  length() {
    let count = 0;

    this.buckets.forEach((bucket) => {
      if (bucket) {
        count += bucket.length;
      }
    });

    return count;
  }

  clear() {
    this.buckets = new Array(this.capacity);
  }

  keys() {
    const arr = [];

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          arr.push(entry.key);
        });
      }
    });

    return arr;
  }

  values() {
    const arr = [];

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          arr.push(entry.value);
        });
      }
    });

    return arr;
  }

  entries() {
    const arr = [];

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          arr.push([entry.key, entry.value]);
        });
      }
    });

    return arr;
  }
}
