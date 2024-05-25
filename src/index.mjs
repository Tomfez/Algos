export class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  export class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
}

  function reverse(){
    let newLL = new LinkedList();
   newLL.head = new Node("a"); 
   newLL.head = new Node("f"); 
   newLL.head = new Node("x"); 

   console.log(newLL);
  }

  reverse();
  
  