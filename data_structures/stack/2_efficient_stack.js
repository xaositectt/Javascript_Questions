'use strict'
// added a count to avoid the iteration through the stack

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const last = this.items[this.count]
    delete this.items[this.count]
    return last
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    // return JSON.stringify(this.items);
    if (this.isEmpty()) {
      return '';
    }
    let stringified = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      if (this.items.hasOwnProperty(i)) {
        stringified = `${stringified}, ${this.items[i]}`
      }
    }
    return stringified;
  }
}

module.exports = {
  Stack
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.toString());

// the properties are not protected
console.log(Object.getOwnPropertyNames(stack)); // {1}
console.log(Object.keys(stack)); // {2}
console.log(stack.items); // {3}

