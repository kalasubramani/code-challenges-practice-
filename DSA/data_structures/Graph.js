//undirected graph - has no specific direction for navigation
//can be traversed from A->B to B->A
//both vertices will maintain the list of other vertices connected to them 

class Graph {
  constructor() {
    this.adjacencyList = [];
  }
  //add a new vertex to graph
  addVertex(vertex) {
    //add a new entry in adj list array
    if (!this.adjacencyList[vertex]) //if a vertex with the name already exists, skip
      this.adjacencyList[vertex] = [];
  }

  //add a new edge to a vertex
  addEdge(vtx1, vtx2) {
    //find the element with the vertex1 in adj list
    //add the new edge to that vertex1 - ie. add vtx2 to that list
    //add the new edge to that vertex2 - ie. add vtx1 to that list
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
    }
  }

  //remove an edge from graph
  removeEdge(vtx1, vtx2) {
    //find vtx1, remove vtx2 from its adj list
    //find vtx2, remove vtx1 from its adj list
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      console.log("removeEdge", vtx1, vtx2)
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter((vtx) => { return vtx !== vtx2 });
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter((vtx) => { return vtx !== vtx1 });
    }
  }

  //remove a vertex from graph
  removeVertex(vtx) {
    //find vtx in adj list
    //loop thru every edge connected to the vtx
    //call removeEdge() by passing in every edge
    //finally remove the vtx from adj list
    if (this.adjacencyList[vtx]) {
      while (this.adjacencyList[vtx].length) {
        let poppedVtx = this.adjacencyList[vtx].pop();
        this.removeEdge(vtx, poppedVtx);
      }
      delete this.adjacencyList[vtx]; //delete will delete the object property, but will not reindex the array or update its length. makes its value "undefined"
    }
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Nagasaki");
g.addVertex("Hiroshima");
g.addVertex("Frankfurt");
console.log(g);
g.addEdge("Nagasaki", "Tokyo");
g.addEdge("Tokyo", "Hiroshima");
g.addEdge("Tokyo", "Frankfurt");
g.addEdge("Nagasaki", "Frankfurt");
console.log(g);
g.removeEdge("Nagasaki", "Tokyo");
console.log(g);
g.removeVertex("Tokyo");
console.log(g);