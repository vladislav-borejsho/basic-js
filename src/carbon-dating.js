const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let res = 0;
  if (typeof(sampleActivity) !== 'string' || isNaN(Number(sampleActivity)) || Number(sampleActivity) === 0 || Number(sampleActivity) < 0 || Number(sampleActivity) > 15 ) {
    return false;
  } else {
    const x = Number(sampleActivity);
    if (x !== NaN ) {
      res = Math.ceil((Math.log(MODERN_ACTIVITY/x)*HALF_LIFE_PERIOD)/0.693)
    } else {return false} 
    
  }
  return res;
}

module.exports = {
  dateSample
};
