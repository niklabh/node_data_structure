'use strict';

var Node = require('./BinaryTree');

function sampleTree() {
  //              1
  //         2           3
  //   4         5  6          7
  //
  var tree;

  tree             = new Node(1);
  tree.left        = new Node(2);
  tree.right       = new Node(3);
  tree.left.left   = new Node(4);
  tree.left.right  = new Node(5);
  tree.right.left  = new Node(6);
  tree.right.right = new Node(7);

  return tree;
}

module.exports = sampleTree;