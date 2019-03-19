
const HashTable = require('./2_hash_table').HashTable
const defaultToString = require('./utils.js').defaultToString
const ValuePair = require('./utils.js').ValuePair


class HashTableLinearProbing extends HashTable {
  constructor(toStrFn = defaultToString) {
    super(toStrFn)
  }

  // if a spot is occupied, just increase the hashcode until it's not used
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        while (this.table[index] != null) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }

  get(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      // iterate through 
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value
      }
    }
    return undefined
  }

  remove(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        // to check if there are multiple elements with the same hash in different positions
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index)
        return true
      }
    }
    return false
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }

  hashCode(key) {
    return this.djb2HashCode(key)
  }

  // better has code function
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key)
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }
}

module.exports = {
  HashTableLinearProbing
}
