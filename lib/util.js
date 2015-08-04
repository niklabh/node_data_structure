'use strict';

var util = {
  /**
   * printMatrix prints a matrix of rows m on stdout
   * @param  {Array} mat [2d matrix]
   * @param  {Number} row [number of rows]
   * 
   */
  printMatrix: function (mat, row) {
    for (var i = 0; i < row; i++) {
      console.log(mat[i]);
    }
  }
};

module.exports = util;