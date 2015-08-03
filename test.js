'use strict';

// Test Runner

var traversals = require('./algos/traversals');

var sample = require('./sampleBinaryTree');

Object.keys(traversals).forEach(function(traversal){
  console.log(traversal);
  traversals[traversal](sample, console.log);
});
