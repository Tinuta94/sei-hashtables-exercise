class Node {
  constructor(key, value) {
    this.data = [key, value]
    this.next = null
    // should have a property called "data" that stores key and value in an array: [key, value]
    // should have a reference to the next node called "next", initialized to null
  }
  get key() {
    return this.data[0]
    // return the actual key from the data property
  }
  get value() {
    return this.data[1]
    // return the actual value from the data property
  }
}

// note: this is a simpler LinkedList class than in the Linked List lesson
class LinkedList {
  constructor() {
    this.head = null
    // initialize a "head" property to null
  }
  add(key, value) {
    // create a new Node with the given data as its data property 
    const newNode = new Node(key, value)
    // if this list's head is null make that node the head, 
    if (!this.head) {
      (this.head = newNode)
    } else {
      let walker = this.head;
      while (walker.next) {
        if (walker.key === key) {
          walker.data[1] = value;
          return;
        }
        walker = walker.next;
      }
      if (walker.key === key) {
        walker.data[1] = value;
      } else {
        walker.next = newNode;
      }
    }
  }
  // otherwise add it to end of the list

  delete(key) {
    if (!this.head) {
      return false;
    } else if (this.head.key === key) {
      const oldHead = this.head;
      this.head = this.head.next;
      oldHead.next = null;
      return oldHead;
    }
    let walker = this.head;
    while (walker.next) {
      if (walker.next.key === key) {
        const targetNode = walker.next;
        walker.next = walker.next.next;
        targetNode.next = null;
        return targetNode;
      }
    }
    return false;
  }
  // search the list for a node whose data has a key that matches the key parameter
  // remove it from the list and return it
  // if no such node exists, return false

  search(key) {
    if (!this.head) {
      return false;
    } else {
      let walker = this.head;
      while (walker) {
        if (walker.key === key) {
          return walker;
        }
        walker = walker.next;
      }
      return false;
    }
  }
}
    // searches the list for a given key
    // if it is found, return it
    // if not, return false
  

class HashTable{
  constructor(size) {
    
    this.table = [];
    for (let i = 0; i < size; i++) {
      this.table.push(null);
    }
  }

  // initialize table size - prime number size is recommended to avoid clustering
  // intialize the table to have "size" number of elements, set to null
  // the table will be an array named "table"


  hash(key) {
    let num = 0;
    for (let i = 0; i < key.length; i++) {
      num += key.charCodeAt(i);
    }
    return num % this.table.length;
  }
  // calculate and return an integer value based key, like in the lesson
  // remember, if you are using modulus, it is recommended to use a prime number to avoid clustering


  insert(key, value) {
    const index = this.hash(key);
    if (this.table[index] == null) {
      this.table[index] = new LinkedList();
    }
    this.table[index].add(key, value);


    // hash the key to get an integer index

    // if there's no linked list at that index in the table 
    // create one and add it
    // and insert this key value pair into the new Linked list

    // if there's a linked list at that index
    // if a node already exists with the key, update it the data in that node to store the new value

    // otherwise
    // add a new node with the given value to the end of the linked list

    // for the convenience of the user, you might wish to return the node, or you can just return true
  }

  delete(key) {
    const index = this.hash(key);
    if (this.table[index] !== null) {
      const deleted = this.table[index].delete(key);
      if (!deleted) {
        return -1;
      } else {
        return deleted;
      }
      }
      return -1;
    }
  
  // lookup the key (i.e. hash it to get an index)
  // if the key is, in fact, in the linked list, delete that Node and return it
  // if the key wasn't found return -1


  search(key) {
    const index = this.hash(key);
    if (this.table[index] !== null) {
      const foundNode = this.table[index].search(key);
      if (!foundNode) {
        return -1
      } else {
        return foundNode
      }
    }
    return -1;
  }
}
// hash key to get index
// search the linked list at the index
// if the key is found, return the Node
// if not, return -1



module.exports = {
  Node,
  LinkedList,
  HashTable
}