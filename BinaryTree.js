'use strict';

/**
 * ## Binary tree
 * 
 * Binary tree is a data structure used to store data in tree format
 * e.g.
 *       1
 *     /   \
 *    2     3
 *   / \   / \
 *  4   5 6   7
 *  
 */ 

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

module.exports = Node;