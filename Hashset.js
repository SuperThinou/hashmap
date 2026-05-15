export class HashSet {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity);
    this.size = 0;
  }

  length() {
    return this.size;
  }
}
