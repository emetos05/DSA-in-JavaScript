class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
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
    previousNode.next = newNode;
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
    this.length--;
    return item;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    this.tail = this.head;
    let first = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
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

myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 9);
myLinkedList.insert(20, 100);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList);
// console.log(myLinkedList.printList());
