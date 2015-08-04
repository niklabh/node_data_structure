'use strict';

/**
 * Given a m*n cost matrix where every cell has cost of visiting that path find the minimum cost
 * to go from 0,0 to m,n when you are allowed to only move up and down
 *
 * Solution is to calculate a minimum cost matrix of size m*n which store minimum cost of reaching 
 * at that cell from 0,0 to i,j.
 *
 * Minimum cost of reaching 0,0 is cost at 0,0. Minimum cost for first row and first column can be calculated 
 * by keep adding element behind in that row or column. Minimum cost of a cell i,j is cost of i,j + 
 * minimum of cell i - 1, j and i, j - 1
 */

function min(a, b) {
  return a > b ? a : b; 
}

function minCostPath(costMatix, m, n) {
  var i,j;
  var minCostMatrix = [];
  for (i = 0; i < m; i++) {
    minCostMatrix[i] = [];
  }
  minCostMatrix[0][0] = costMatix[0][0];
  for (i = 1; i < m; i++) {
    minCostMatrix[i][0] = minCostMatrix[i - 1][0] + costMatix[i][0];
  }
  for (j = 1; j < n; j++) {
    minCostMatrix[0][j] = minCostMatrix[0][j - 1] + costMatix[0][j];
  }

  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      minCostMatrix[i][j] = costMatix[i][j] + min(minCostMatrix[i - 1][j], minCostMatrix[i][j - 1]);
    }
  }

  return minCostMatrix[m - 1][n - 1];
}

module.exports = minCostPath;

if (require.main === module) {
  (function(){
    var printMatrix = require('../lib/util').printMatrix;
    var sampleCostMatix = require('../sample/costMatix');
    console.log("Cost matrix");
    printMatrix(sampleCostMatix, 3);
    console.log("Minimum Cost: ", minCostPath(sampleCostMatix, 3, 3));
  }());
}
