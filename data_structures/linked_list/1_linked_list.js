const equals = require('./utils').defaultEquals;
const Node = require('./utils').Node;

export default class LinkedList {
  constructor(equalsFn = equals) {
    this.count = 0;
    this.head = undefined;
    this.isEqual = equalsFn;
  }

  push(element) {
    let node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element, position) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(position - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node; 
      }
      count++;
      return true;
    }
    return false;
  }

  getElement(position) {
    if (position >= 0 && position <= this.count) {
      let current = this.head;
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
      return current;
    }
  }

  remove(element) {
    let index = this.indexOf(element);
    this.removeAt(index);
  }

  removeAt(position) {
    let result;
    if (position >= 0 && position < this.count) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        // get the previous elemenent
        let previous = this.getElement(position - 1);
        // the one I'm removing
        current = previous.next;
        // putting the next one as the current one, thus removing the current
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.isEqual(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size(); i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }

  sort() {

  }

  reverse() {

  }
}
