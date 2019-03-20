const BinarySearchTree = require('./1_binary').BinarySearchTree
const BalanceFactor = require('./utils').BalanceFactor

// Adelson-Velskii and Landi’s tree- self balancing tree, the height of left and right sides only differs by 1 max
class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
  }

  // calculate height: the distance from an end branch
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return Math.max(
      this.getNodeHeight(node.left), this.getNodeHeight(node.right)
    ) + 1
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
    
  }

  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }

  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  insert(key) {
    this.root = this.insertNode(this.root, key)
  }
  insertNode(node, key) {
    // insert node as in BST tree
    if (node == null) {
      return new Node(key)
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node // duplicated key
    }
    // balance the tree if needed
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node)
      } else {
        return this.rotationLR(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (
        this.compareFn(key, node.right.key) === Compare.BIGGER_THAN
      ) {
        node = this.rotationRR(node)
      } else {
        return this.rotationRL(node)
      }
    }
    return node
  }

  removeNode(node, key) {
    node = super.removeNode(node, key)
    if (node == null) {
      return node // null, no need to balance
    }
    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left)
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node)
      }
      if (
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationLR(node.left)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right)
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node)
      }
      if (
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationRL(node.right)
      }
    }
    return node
  }

  // balancing processes:
  // Left-Left(LL): This is a single rotation to the right
  // Right - Right(RR): This is a single rotation to the left
  // Left - Right(LR): This is a double rotation to the right(rotate left then right)
  // Right - Left(RL): This is a double rotation to the left(rotate right then left)

}