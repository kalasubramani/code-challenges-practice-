
//a weighed graph has a weight added for each edge
class weighed_graph{
  constructor(){
    this.adjacencyList=[];
  }

  //add a new vertex to graph
  addVertex(vtx){
    //check if the vertex already exists in the graph
    //if not present, then add new vertex to the graph
    if(!this.adjacencyList[vtx]) this.adjacencyList[vtx]=[];
  }

  //add an edge between two vertices
  //each edge must be associated with a weight
  //the sturucture will be [vtx1,{node:vtx2,weight:10}]
  addEdge(vtx1,vtx2,weight){
    this.adjacencyList[vtx1].push({Node:vtx2,weight:weight});
    this.adjacencyList[vtx2].push({node:vtx2,weight:weight});
  }
}

let graph = new weighed_graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B",9);
graph.addEdge("A","C",5);
graph.addEdge("B","C",7);
console.log(graph);