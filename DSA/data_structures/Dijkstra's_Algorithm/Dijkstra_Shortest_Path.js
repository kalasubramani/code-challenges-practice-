
//algorithm uses priority queues to store intermediate distance calculations and weighted graph
//input params - starting vtx,destination vtx
//create an obj {distances} where key = each value in adj list , value = Infinity (default)
//set starting vtx value to be 0
//add each vtx to priority queue
//set value of each vtx to Infinity and startingVtx =0
//creat an obj {previous} to store through which node we can reach here
//add all vtx in adjlist and set default value to null
//loop thru each item in priority queue
//dequeue vtx with shortest distance from priroty Q
//if dequeued index === destination vtx, return
// else calulate the distance between start vtx and this intermediate vtx
// check if calculated distance is less than the distance for that vtx in distance obj
//if value is less, 
//update {distance} with newly calculated value
//update {previous} to contain this vtx
//enqueue the vtx with total distance from start node

class priority_queue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort(); //bubbles up the value to right spot
  }
  sort() {
    this.values.sort((a, b) => { return a.priority - b.priority });
  }
  dequeue() {
    return this.values.shift();
  }
}

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

  Dijkstra_Shortest_Path(startVtx,destinationVtx){
    let nodes = new priority_queue();
    let distances={},previous={},smallest,traversalPath=[];

    //setup initial state -- loop over adjList
    for(let vtx in this.adjacencyList){
      if (vtx===startVtx){
        distances[vtx]=0;
        nodes.enqueue(vtx,0);//vtx and its priority
      } else {
        distances[vtx]=Infinity;
        nodes.enqueue(vtx,Infinity);//vtx and its priority
      }
      //set prev to null for all vtx
      previous[vtx]=null;
    }

    //as long as there are nodes to visit
    while(nodes.values.length){
      //get smallest frpm priQ
      smallest=nodes.dequeue().value;
      if(smallest===destinationVtx) {
        //we are done with traversal. Time to build the traversal path
        while(previous[smallest]){
          traversalPath.push(smallest);
          smallest=previous[smallest];
        }
        break;
      }

      if(smallest || distances[smallest] !== Infinity){
        for(let nextNode in this.adjacencyList[smallest]){      
          //find neighboring node
          let neighbor = this.adjacencyList[smallest][nextNode];
         
          //calculate new distance to neighboring node
          let tempDistance = distances[smallest]+nextNode.weight;
          let nextNeighbor = neighbor.node;
          if(tempDistance<distances[nextNeighbor]){
            distances[nextNeighbor]=tempDistance; //update new shortest dist
            previous[nextNeighbor] =smallest;//how we got there
            //enqueue in priQ with new pri
            nodes.enqueue(nextNeighbor,tempDistance);
            console.log("nodes",nodes);
          }
        }
      }
    }
    console.log(traversalPath);
    return traversalPath.concat(smallest).reverse();
  }
}

let graph = new weighed_graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","E",3);
graph.addEdge("D","F",1);
graph.addEdge("E","F",1);
console.log(graph);
graph.Dijkstra_Shortest_Path("A","E");

  //       A
  //     /   \4
  //  2 /      B
  //   / 2  3   \3
  //  C-----D----E 
  //  \     |   /
  //  4\   1|  /1
  //     \  | /
  //       F

