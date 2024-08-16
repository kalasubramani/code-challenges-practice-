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

  //GRAPH TRAVERSAL
  //depth first traversal - recursive
  DFTRecursive(vtx){
    //create array to store result and return it at the end
    //create an obj to store visited vtx
      //helper function(vtx) - to recurse for traversing depth first
          //check if vtx is empty, return
          //add vtx to visited obj and also push it to result array
          //loop thru each vertices in the adj list of that vtx
            //if any of the vertex in adh list is not visited, then invoke helper fn with that vtx as param
    //call helper fn(starting vertex)

    let results=[], visited={}, adjList = this.adjacencyList;;

    function traverseDepthFirst(vtx){
        if(!vtx) return null;
        visited[vtx] = true;
        results.push(vtx);
        // console.log(adjList[vtx], "results",results);
        adjList[vtx].forEach(v=> { 
          if( !visited[v]) return traverseDepthFirst(v);          
        });        
    }

    traverseDepthFirst(vtx);

    return results;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
// console.log(g);
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F"); 
//GRAPH STRUCTURE
        //    A
        //  /   \
        // B     C
        // |      |
        // D ---- E
        //   \   /
        //     F

// console.log(g);
// g.removeEdge("Nagasaki", "Tokyo");
// console.log(g);
// g.removeVertex("Tokyo");
// console.log(g);
let traversedOrder = g.DFTRecursive("A");
console.log(traversedOrder);