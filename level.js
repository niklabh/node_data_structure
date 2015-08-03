'use strict';

var Fifo = require('./FifoQueue');
var sample = require('./sampleBinaryTree')();

/**
 * Level Order Traversal of a Binary Tree
 * where nodes are traversed in DFS manner
 */

function spiralTreeTraversal (root, operation) {
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

spiralTreeTraversal(sample, console.log);








