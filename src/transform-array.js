const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let newArr = [...arr];
  let res = [];
  let constArr = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
    "delete",
  ];
  for (let i = 0; i < newArr.length; i++) {
    
    switch (newArr[i]) {
      case "--discard-next":
        if (newArr[i + 1] && !(constArr.includes(newArr[i + 1]))) {
          newArr[i + 1] = "delete";
          i += 1;
        }
        break;
      case "--discard-prev":
        if (res.length > 0 && !(constArr.includes(newArr[i - 1]))) {
       
          newArr[i - 1] = "delete";
          res.pop();
        } 
        break;
      case "--double-next":
        if (newArr[i + 1] && !(constArr.includes(newArr[i + 1]))) {
        
          res.push(newArr[i + 1]);
          
        }
        break;
      case "--double-prev":
        if (newArr[i - 1] && !(constArr.includes(newArr[i - 1]))) {
          
          res.push(res[res.length - 1]);
         
        }
        break;
      default:
        res.push(newArr[i]);
    }
  }
  return res;
}

module.exports = {
  transform
};
