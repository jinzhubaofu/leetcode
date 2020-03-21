/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] === s[j]) {
      continue;
    }
    // 1. forward
    // 2. backward
    return isPalindrome(s.slice(i + 1, j + 1)) || isPalindrome(s.slice(i, j));
  }
  return true;
};

const isPalindrome = function(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
};

console.log(validPalindrome('abca'));
console.log(validPalindrome('aba'));
console.log(validPalindrome('abc'));
