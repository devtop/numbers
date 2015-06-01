// random.js

(function(exports) {
  'use strict';

  function integer(maximum, minimum){
    minimum = typeof minimum !== 'undefined' ? minimum : 0;
    var range = maximum - minimum;
    var rand = Math.random();
    var random = Math.floor(rand*(range+1)) + minimum;
    return random;
  }
exports.integer = integer;

})(this);
