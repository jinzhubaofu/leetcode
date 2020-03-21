/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  let n = 0;
  let y = x;

  do {
    n = n * 10 + y % 10;
    y = Math.floor(y / 10);
  } while (y > 0);

  return n === x;
};


console.log(isPalindrome(121));
console.log(isPalindrome(1534236469));
console.log(isPalindrome(123));
console.log(isPalindrome(1));
console.log(isPalindrome(-1));
console.log(isPalindrome(-123));
