const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  arr = arr.sort(function(argument1, argument2) {
    if (argument1 == -1) {return 0;}
    if (argument2 == -1) {return 0;}
    return argument1 - argument2;
   });
   return arr;
}

module.exports = {
  sortByHeight
};
