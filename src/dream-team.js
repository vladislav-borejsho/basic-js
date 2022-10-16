const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  if (Array.isArray(members)) {
    for (let i=0; i<members.length; i++) {
      if (typeof(members[i]) === 'string') {
        for (let k=0; k<members[i].length; k++) {
          if (members[i][k] !== ' ') {
            arr.push(members[i][k]);
            break;
          }
        }
      }
    }
    return arr.join('').toUpperCase().split('').sort().join('');
  } else {return false;}
  
}

module.exports = {
  createDreamTeam
};
