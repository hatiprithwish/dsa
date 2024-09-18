class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Add new element
  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove first element, i.e, getMin value
  getMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }
    return min;
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    const length = this.heap.length;
    let leftChild, rightChild, smallest;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  // Return the size of the heap
  size() {
    return this.heap.length;
  }
}

function findKLargest(nums, k) {
  const minHeap = new MinHeap();

  for (let num of nums) {
    minHeap.insert(num);

    // If heap size exceeds k, remove the smallest element
    if (minHeap.size() > k) {
      minHeap.getMin();
    }
  }

  return minHeap.heap; // Contains the k largest elements
}

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKLargest(nums, k));
