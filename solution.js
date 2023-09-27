const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert (data){
    let newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count ++;
      node = node.next
    }
    return count
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
    node = node.next;
    }
    return node;
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  
  getKth(k) {
    let currentNode = this.head;
    let count = 1;
    while (currentNode && count !== k){
      count ++;
      currentNode = currentNode.next
    }
    return currentNode 
  }

  getKthToLast (k) {
      let getSize = this.size();
      let node = this.head;
      for (let x = 1; x <getSize - k; x++){
        node = node.next
      }
      return node
  }


  isEmpty(){
    return !this.head
  }

  toArray(){
    let arr = [];
    let node = this.head;
    while (node){
      arr.push(node.data);
      node = node.next;
    }
    return arr
  }
  containsDuplicates(){
    const arr = this.toArray();
    const unique  = [... new Set(arr)];
    return arr.length !== unique.length;
  }

  clear() {
    this.head = null;
  }
}
module.exports = {
  Node,
  LinkedList,
};
