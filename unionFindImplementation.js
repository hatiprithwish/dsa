class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(null).map((_, index) => index);
    this.rank = new Array(size).fill(1);
  }

  find(node) {
    if (this.parent[node] !== node) {
      this.parent[node] = this.find(this.parent[node]); //recursively finds the root of the set that node belongs to.
    }

    return this.parent[node];
  }

  union(node1, node2) {
    const root1 = this.find(node1);
    const root2 = this.find(node2);

    if (root1 != root2) {
      if (this.rank[root1] > this.rank[root2]) {
        this.parent[root2] = root1;
      } else if (this.rank[root2] > this.rank[root1]) {
        this.parent[root1] = root2;
      } else {
        this.parent[root2] = this.parent[root1];
        this.rank[root1] += 1;
      }
    }
  }

  isConnected(node1, node2) {
    return this.find(node1) === this.find(node2);
  }
}

const uf = new UnionFind(4);

console.log(uf.isConnected(0, 1)); // false

// Union sets containing 0 and 1
uf.union(0, 1);
console.log(uf.isConnected(0, 1)); // true

// Union sets containing 1 and 2
uf.union(1, 2);
console.log(uf.isConnected(0, 2)); // true

// Union sets containing 3 and 4
uf.union(3, 4);
console.log(uf.isConnected(3, 4)); // true

// 0 and 4 are in different sets
console.log(uf.isConnected(0, 4)); // false

// Union sets containing 0 and 4
uf.union(0, 4);
console.log(uf.isConnected(0, 4)); // true
