const equals = require('./utils').defaultEquals;
const LinkedList = require('./1_linked_list').LinkedList;
const DoublyNode = require('./utils').DoublyNode;

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = equals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, position) {
    if (position >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (position === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          // linking together node and current
          node.next = current;
          current.prev = node;
          this.head = node; // putting node to the head
        }
      } else if (position === count) {
        current = this.tail;
        // linking together tail with node
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(position - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(position) {
    if (position >= 0 && position < this.count) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (position === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(position);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

module.exports = {
  DoublyLinkedList
}
