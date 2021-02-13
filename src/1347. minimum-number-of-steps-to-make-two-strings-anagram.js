/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let map = {};
  for (let i = 0, len = t.length; i < len; i++) {
    map[t[i]] = (map[t[i]] || 0) + 1;
  }

  let ans = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    let char = s[i];
    if (map[char]) {
      map[char]--;
    } else {
      ans++;
    }
  }

  return ans;
};

console.log(minSteps('bab', 'aba'));
console.log(minSteps('leetcode', 'practice'));
console.log(minSteps('anagram', 'mangaar'));
