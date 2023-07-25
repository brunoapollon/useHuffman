export class MinHeap {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    if (this.data.length === 0) { return null; }

    const item = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.down(0);
    return item;
  }

  get length() { return this.data.length; }

  get value() { return (index) => this.data[index]; }

  get getParentIndex() {
    return (childIndex) => Math.floor((childIndex - 1) / 2);
  }

  get getLeftChildrenIndex() {
    return (parentIndex) => 2 * parentIndex + 1;
  }

  get getRightChildIndex() {
    return (parentIndex) => 2 * parentIndex + 2;
  }

  swap(fistIndex, secondIndex) {
    const backup = this.data[fistIndex];
    this.data[fistIndex] = this.data[secondIndex];
    this.data[secondIndex] = backup;
  }

  up(index) {
    const parentIndex = this.getParentIndex(index);
    if (index === 0) return;

    if (this.data[parentIndex] > this.data[index]) {
      this.swap(index, parentIndex);
      this.up(parentIndex);
    }
  }

  down(index) {
    const leftChildrenIndex = this.getLeftChildrenIndex(index);
    const rightChildrenIndex = this.getRightChildIndex(index);

    if (leftChildrenIndex > this.length - 1) return;

    if (leftChildrenIndex === this.data.length - 1) {
      if (this.data[index] > this.data[leftChildrenIndex]) {
        this.swap(index, leftChildrenIndex);
      }
      this.down(leftChildrenIndex);
    } else {
      const nextPosition = this.data[leftChildrenIndex] < this.data[rightChildrenIndex]
        ? leftChildrenIndex
        : rightChildrenIndex;

      if (this.data[index] > this.data[nextPosition]) {
        this.swap(index, nextPosition);
        this.down(nextPosition);
      }
    }
  }

  printHeap() {
    let heap = ` ${this.data[0]} `;
    for (let i = 1; i < this.data.length; i++) {
      heap += ` ${this.data[i]} `;
    }
    return heap;
  }

  peek() {
    if (this.data.length === 0) {
      return null;
    }
    return this.data[0];
  }
}

export function heapSort(heap, size) {
  const newHeap = new MinHeap(size);
  for (let i = 0; i < size; i++) { newHeap.push(heap.value(i)); }
  for (let i = 0; newHeap.length > 0; i++) {
    heap.data[i] = newHeap.pop();
  }
}
