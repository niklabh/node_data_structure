'use strict';

var Node = require('../ds/BinaryTree');

/**
 * Sample Binary Tree
 * 
 */

function sampleTree() {
  //              4
  //         2           6
  //   1         3  5          7
  //
  var tree;

  tree             = new Node(4);
  tree.left        = new Node(2);
  tree.right       = new Node(6);
  tree.left.left   = new Node(1);
  tree.left.right  = new Node(3);
  tree.right.left  = new Node(5);
  tree.right.right = new Node(7);

  return tree;
}

module.exports = sampleTree();