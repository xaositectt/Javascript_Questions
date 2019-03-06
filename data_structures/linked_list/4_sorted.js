const equals = require('./utils').defaultEquals;
const LinkedList = require('./1_linked_list').LinkedList;
const compare = require('./utils').defaultCompare;

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = equals, compareFn = compare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

module.exports = {
  SortedLinkedList
}
