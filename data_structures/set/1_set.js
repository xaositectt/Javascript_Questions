class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    // in operator looks in the prototype chain, hasOwnProperty only in this object
    // return element in items;
    return Object.prototype.hasOwnProperty.call(this.items, element);
  };

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length; 
  };
  
  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const union = new Set();
    this.values().forEach(value => union.add(value));
    otherSet.values().forEach(value => union.add(value));
    return union;
  }

  intersection(otherSet) {
    const intersection = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersection.add(value);
      }
    });
    return intersection;
  }

  difference(otherSet) {
    const difference = new Set();
    this.values().forEach(value => { 
      if (!otherSet.has(value)) {
        difference.add(value);
      }
    });
    return difference;
  } 

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
      }
    });
    return isSubset;
  }

  
} 