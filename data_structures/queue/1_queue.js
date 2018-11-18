'use strict'
// first in, first out principle- the only available methods to add and remove
// to not traverse an array I am using an object as items repository
// firstItem is used to reference the first item for dequeue

class Queue {
  constructor() {
    this.count = 0;
    this.firstItem = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.firstItem];
    delete this.items[this.firstItem];
    this.firstItem++;
    return result;
  }

  peek() {
    return this.items[this.firstItem];
  }

  //lowestCount indicates last element so if it's the same as count size is 0
  isEmpty() {
    return (this.count - this.firstItem) === 0;
  }

  size() {
    return this.count - this.firstItem;
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.firstItem = 0;
  }

  toString() {
    let stringified = `${this.items[this.firstItem]}`;
    for (let i = 1; i < this.size(); i++) {
      stringified = `${stringified}, ${this.items[this.firstItem + i]}`
    }
    return stringified;
  }
}

module.exports = {
  Queue
}


let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.enqueue('e');
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.toString());
