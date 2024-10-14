import { Node } from "./Node.mjs";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  size() {
    let count = 0;
    let aux = this.head;
    while (aux !== null) {
      count++;
      aux = aux.next;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let count = 0;
    let aux = this.head;

    while (aux !== null) {
      if (count === index) {
        return aux;
      }
      aux = aux.next;
      count++;
    }
    return null;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;

    while (current.next !== this.tail) {
      current = current.next;
    }
    
    this.tail = current;
    current.next = null;
  }

  find(value) { 
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index; 
      }
      current = current.next;
      index++;
    } 

    return null;
  }

  toString() {
    if (this.head === null) 
      return "null";
      
    let string = "";
    let aux = this.head;

    while (aux !== null) {
      string += `( ${aux.value} ) -> `;
      aux = aux.next;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    let arraySize = this.size();

    if (index < 0 || index > arraySize) {
      console.log("Index out of bounds");
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (arraySize === 0) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous;

      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.next = newNode;
      newNode.next = current;

      if (index === arraySize) {
        this.tail = newNode;
      }
    }
  }

  removeAt(index) {
    const arraySize = this.size();

    if (index < 0 || index >= arraySize) {
      console.log("Index out of bounds");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (arraySize === 1) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let previous;

      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      
      previous.next = current.next;

      if (current === this.tail) {
        this.tail = previous;
      }
    }
  }
}