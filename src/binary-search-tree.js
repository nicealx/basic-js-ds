const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = [];
  }

  root() {
    if (this.tree.length === 0) return null;
    return {
      data: this.tree[0]
    }
  }

  add(data) {
    this.tree.push(data);
    return this.tree;
  }

  has(data) {
    if (!this.tree.includes(data)) return false;
    return true;
  }

  find(data) {
    const finder = this.tree.find(e => e === data ? data : null);
    if(!finder) return null
    return {
      data: finder
    }
  }

  remove(data) {
    this.tree = this.tree.filter(e => e !== data);
    return this.tree;
  }

  min() {
    return Math.min(...this.tree);
  }

  max() {
    return Math.max(...this.tree);
  }
}

module.exports = {
  BinarySearchTree
};