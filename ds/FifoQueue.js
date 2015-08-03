'use strict';

/**
 * FIFO Queue
 * Fifo queue is a data structure used to emulate a First In First Out Queue
 *
 *  <--- [1, 2, 3, 4, 5]  <---
 */

var debug = require('debug')('FIFO');

function Fifo() {
  var queue = [];

  this.enqueue = function (data) {
    queue.push(data);
    debug("enqueue", queue);
  };

  this.dequeue = function () {
    return queue.shift();
    debug("dequeue", queue);
  };
}

module.exports = Fifo;