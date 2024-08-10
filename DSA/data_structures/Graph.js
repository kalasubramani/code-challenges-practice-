

class Graph {
  constructor() {
    this.adjacencyList = [];
  }
  //add a new vertex to graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) //if a vertex with the name already exists, skip
      this.adjacencyList[vertex] = [];
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Nagasaki");
g.addVertex("Hiroshima");
console.log(g);