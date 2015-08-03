'use strict';

var Fifo = require('../ds/FifoQueue');

/**
 * Pre Order traversal
 * root -> children
 */

function preOrder(root, operation) {
  if (typeof operation != 'function') {
    throw new Error("Please provide a operation");
  }

  (function traverse(root) {
    if (!root) return;
    operation(root.data);
    traverse(root.left);
    traverse(root.right);
  }(root));
}

/**
 * In Order traversal
 * First left children -> parent -> right child
 */

function inOrder(root, operation) {
  if (typeof operation != 'function') {
    throw new Error("Please provide a operation");
  }

  (function traverse(root) {
    if (!root) return;
    traverse(root.left);
    operation(root.data);
    traverse(root.right);
  }(root));
}

/**
 * Post Order traversal
 * First children then parent
 */

function postOrder(root, operation) {
  if (typeof operation != 'function') {
    throw new Error("Please provide a operation");
  }

  (function traverse(root) {
    if (!root) return;
    traverse(root.left);
    traverse(root.right);
    operation(root.data);
  }(root));
}

/**
 * Level Order Traversal of a Binary Tree
 * where nodes are traversed in DFS manner
 */

function levelOrder (root, operation) {
  var fifo = new Fifo();

  if (typeof operation != 'function') {
    throw new Error("Please provide a operation");
  }

  var temp = root;
  while (temp) {
    operation(temp.data);

    if (temp.left) fifo.enqueue(temp.left);
    if (temp.right) fifo.enqueue(temp.right);

    temp = fifo.dequeue();
  }
}

module.exports = {
  preOrder: preOrder,
  inOrder: inOrder,
  postOrder: postOrder,
  levelOrder: levelOrder
};

if (require.main === module) {
  (function() {
    var sample = require('../sampleBinaryTree');
    Object.keys(module.exports).forEach(function (traversal){
      console.log(traversal);
      module.exports[traversal](sample, console.log);
    });
  }());
}
