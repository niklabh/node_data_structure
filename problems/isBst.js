'use strict';


/**
 * Check whether given Binary tree is BST or not
 *
 * Algorithm:
 *
 * Using property of a Binary tree that if its a BST inorder traversal must be in sorted order
 * 
 * - Do Inorder traversal of Binary tree
 * - Keep a ptr pointing to previous node in traversal
 * - If current is less than previous tree is BST or not
 */

function isBst (root) {
  var previous = -Infinity;
  var isBstFlag = true;
  (function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (previous > node.data) isBstFlag = false;
    previous = node.data;
    traverse(node.right);
  }(root));
  return isBstFlag;
}

module.exports = isBst;

if (require.main === module) {
  (function(){
    var bt = require('../sample/binaryTree');
    var bst = require('../sample/binarySearchTree');
    console.log("Is BST? " + isBst(bst));
    console.log("Is BST? " + isBst(bt));
  }());
}