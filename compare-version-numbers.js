/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

    version1 = version1.split('.');
    version2 = version2.split('.');

    var len1 = version1.length;
    var len2 = version2.length;

    for (var i = 0, len = Math.max(len1, len2); i < len; ++i) {

        var v1 = +(version1[i] || '');
        var v2 = +(version2[i] || '');

        if (v1 < v2) {
            return -1;
        }

        if (v1 > v2) {
            return 1;
        }

    }

    return 0;



};

console.log(compareVersion('0', '0'));
console.log(compareVersion('0', '0.1'));
console.log(compareVersion('1.1', '1'));
console.log(compareVersion('1.1', '1'));
console.log(compareVersion('1.01', '1.01'));
console.log(compareVersion('1.01', '1.01.2'));
console.log(compareVersion('12.0', '10.2'));
