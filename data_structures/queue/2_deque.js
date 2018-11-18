class Deque {
  constructor() {
    this.count = 0;
    this.firstItem = 0;
    this.items = {};
  }

  addFrontElement(element) {
    this.firstItem--;
    this.items[this.firstItem] = element;
  }

  addBackElement(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.size() === 0) {
      return undefined;
    }
    let frontElement = this.items[this.firstItem];
    delete this.items[this.firstItem];
    this.firstItem++;
    return frontElement;
  }

  removeBack() {
    if (this.size() === 0) {
      return undefined;
    }
    this.count--;
    let backElement = this.items[this.count];
    delete this.items[this.count];
    return backElement;
  }

  peekFront() {
    return this.items[this.firstItem];
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return (this.count - this.firstItem) === 0;
  }

  size() {
    return this.count - this.firstItem;
  }

  clear() {
    this.items = {};
    this.count = 0;
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
  Deque
}

const deque = new Deque();

deque.addBackElement(1);
deque.addBackElement(2);
deque.addBackElement(3);
deque.addFrontElement(0);
deque.addFrontElement(-1);
deque.printMe();
console.log('toString:', deque.toString());
console.log(deque.removeBack());
console.log(deque.removeBack());
console.log(deque.removeBack());
console.log(deque.removeBack());
console.log(deque.removeBack());
deque.printMe();
console.log(deque.peekFront());
console.log(deque.peekBack());
deque.printMe();
console.log(deque.isEmpty());
