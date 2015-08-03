'use strict';

// Test Runner

var traversals = require('./algos/traversals');

var binaryTree = require('./sample/binaryTree');
var binarySearchTree = require('./sample/binarySearchTree');
var isBST = require('./problems/isBst');

////////////// Traversals ///////////////////
console.log("Traversals");

Object.keys(traversals).forEach(function(traversal){
  console.log(traversal);
  traversals[traversal](binaryTree, console.log);
});
////////////////////////////////////////////


/////////////// isBST ////////////////////////
console.log("Binary Tree is BST");
console.log("Is BST? " + isBST(binarySearchTree));
console.log("Is BST? " + isBST(binaryTree));
//////////////////////////////////////////////
