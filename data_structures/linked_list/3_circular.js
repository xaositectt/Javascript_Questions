const equals = require('./utils').defaultEquals;
const LinkedList = require('./1_linked_list').LinkedList;
const Node = require('./utils').Node

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = equals) {
    super(equalsFn);
  }

  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (position === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          this.head = node;
          // update last element
          let last = this.getElementAt(this.size());
          last.next = this.head;
        }
      } else { // no changes in this scenario
        const previous = this.getElementAt(position - 1);
        node.next = previous.next;
        previous.next = node;
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          let last = this.getElementAt(this.size());
          this.head = this.head.next;
          last.next = this.head;
          current = removed;
        }
      } else {
        // no need to update last element
        const previous = this.getElementAt(position - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

module.exports = {
  CircularLinkedList
}
