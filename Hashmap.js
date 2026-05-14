class Hashmap {
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

    if (!this.buckets[index]) {
      if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }

      this.buckets[index] = [];
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      const entry = this.buckets[index][i];

      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    this.buckets[index].push({
      key: key,
      value: value,
    });
  }

  get(key) {
    const hashCode = this.hash(key);
    const index = Math.abs(hashCode) % this.capacity;

    if (!this.buckets[index]) {
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
}
