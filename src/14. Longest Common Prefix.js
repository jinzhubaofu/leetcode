/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';

  if (strs.length === 0) {
    return prefix;
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let index = 0;

  while (true) {
    let c = strs[0][index];
    if (c === undefined) {
      return prefix;
    }

    for (let i = 1, len = strs.length; i < len; i++) {
      // 1 current char is empty, this str is shortest, and its the common prefix
      // 2 diffrent char
      if (strs[i][index] === undefined || c !== strs[i][index]) {
        return prefix;
      }
    }

    prefix += c;
    index++;
  }
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['a', '']));
console.log(longestCommonPrefix(['', '']));
