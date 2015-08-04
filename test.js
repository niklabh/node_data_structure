'use strict';

// Test Runner

////////////// Traversals ///////////////////
console.log("Traversals");
var traversals = require('./algos/traversals');
var binaryTree = require('./sample/binaryTree');
Object.keys(traversals).forEach(function(traversal){
  console.log(traversal);
  traversals[traversal](binaryTree, console.log);
});
////////////////////////////////////////////


/////////////// isBST ////////////////////////
var isBST = require('./problems/isBst');
var binarySearchTree = require('./sample/binarySearchTree');
console.log("Binary Tree is BST");
console.log("Is BST? " + isBST(binarySearchTree));
console.log("Is BST? " + isBST(binaryTree));
//////////////////////////////////////////////


/////////////// minCostPath ////////////////////////
var printMatrix = require('./lib/util').printMatrix;
var minCostPath = require('./problems/minCostPath');
var sampleCostMatix = require('./sample/costMatix');
console.log("Cost matrix");
printMatrix(sampleCostMatix, 3);
console.log("Minimum Cost: ", minCostPath(sampleCostMatix, 3, 3));
/////////////////////////////////////////////////////
