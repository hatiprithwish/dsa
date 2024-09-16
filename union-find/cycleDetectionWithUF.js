import { UnionFind } from "./unionFindImplementation";

export default function hasCycle(edges, verticesCount) {
  const uf = new UnionFind(verticesCount);

  // Iterate over all edges
  for (let [u, v] of edges) {
    // If u and v are in the same set, cycle is detected
    if (uf.find(u) === uf.find(v)) {
      return true;
    }
    // Otherwise, union the sets
    uf.union(u, v);
  }

  // No cycle found
  return false;
}

const verticesCount = 5;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4], // This edge would create a cycle
];

console.log(hasCycle(edges, verticesCount));
