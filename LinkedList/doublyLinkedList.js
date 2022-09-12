class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    } else if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const previousNode = this.listTraversal(index - 1);
    const nextNode = this.listTraversal(index);
    newNode.next = nextNode;
    newNode.prev = previousNode;
    previousNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    } else if (index === this.length - 1) {
      this.tail = this.listTraversal(index - 1);
      this.tail.next = null;
      this.length--;
      return this.printList();
    }
    const item = this.listTraversal(index);
    const previousNode = this.listTraversal(index - 1);
    const nextNode = this.listTraversal(index + 1);
    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    this.length--;
    return item;
  }

  listTraversal(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(0, 9);
myDoublyLinkedList.insert(20, 100);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());
