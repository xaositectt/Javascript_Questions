const Compare = require('./utils').Compare
const defaultCompare = require('./utils').defaultCompare
const Node = require('./utils').Node

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  // traverses from smallest number to largest
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }


  // traverses from parent node to children from the left
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // first the children then the parent
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min() {
    return this.minNode(this.root)
  }

  max() {
    return this.maxNode(this.root)
  }

  minNode(node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  maxNode(node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (
      this.compareFn(key, node.key) === Compare.BIGGER_THAN
    ) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (
      this.compareFn(key, node.key) === Compare.BIGGER_THAN
    ) { // {6}
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // key is equal to node.item
      // case 1
      if (node.left == null && node.right == null) {
        node = null
        return node; // {11}
      }
      // case 2
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }
      // case 3
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }

  
}

module.exports = {
  BinarySearchTree
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

const logMe = (arg) => console.log(arg)

console.log('in order:')
tree.inOrderTraverse(logMe)

console.log('preder:')
tree.preOrderTraverse(logMe)

console.log('postorder:')
tree.postOrderTraverse(logMe)

console.log('the max is: ')
console.log(tree.max().key)
console.log('the max is: ')
console.log(tree.min().key)
