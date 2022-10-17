const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = [];
  let {
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
    repeatTimes = 1,
    separator = '+',
  } = options;

  while (additionRepeatTimes > 0) {
    str += `${addition}`;
    additionRepeatTimes -= 1;
    if (additionRepeatTimes > 0) {
      str += `${additionSeparator}`;
    }
  }

  while (repeatTimes > 0) {
    res.push(str);
    repeatTimes -= 1;
  }

  return res.join(separator)
}

module.exports = {
  repeater
};
