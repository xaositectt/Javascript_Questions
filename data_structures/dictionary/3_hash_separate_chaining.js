
const HashTable = require('./2_hash_table').HashTable
const defaultToString = require('./utils.js').defaultToString
const ValuePair = require('./utils.js').ValuePair
const LinkedList = require('../linked_list/1_linked_list.js').LinkedList


class HashTableSeparateChaining extends HashTable {
  constructor(toStrFn = defaultToString) {
    super(toStrFn)
  }

  // add a linked list to every position and if the hashcode is the same, the element 
  // will be an new element of that linkedlist
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()
      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }

  // get the linkedlist at the correct position and transverse the linkedlist until you get the 
  // required key and return the value
  get(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined
  }

  remove(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element)
          return true
        }
        current = current.next
      }
    } else if (linkedList.isEmpty()) {
      delete this.table[position]
    }
    return false
  }
}

module.exports = {
  HashTableSeparateChaining
}
