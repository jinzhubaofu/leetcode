var INT_MAX = 2147483647;
var INT_MIN = -2147483648;

var myAtoi = function (str) {

    var result = 0;
    var a = 0;

    str = str.trim();

    for (var i = 0, len = str.length; i < len; i++) {

        var c = str[i];

        if (result === 0 && a === 0 && /\s/.test(c)) {
            continue;
        }

        if (result === 0 && a === 0) {
            if (c === '+') {
                a = 1;
                continue;
            }
            if (c === '-') {
                a = -1;
                continue;
            }
        }


        if (!/\d/.test(c)) {
            return a * result;
        }

        c = +c;

        result = result * 10 + c;

        if (a === 0) {
            a = 1;
        }

        if (a > 0 && result > INT_MAX) {
            return INT_MAX;
        }

        if (a < 0 && result * a < INT_MIN) {
            return INT_MIN;
        }

    }

    return a * result;

};

// console.log(myAtoi(''));
// console.log(myAtoi(' 0 '));
// console.log(myAtoi('1'));
// console.log(myAtoi(' +0 '));
// console.log(myAtoi(' -0 '));
// console.log(myAtoi(' a0 '));
// console.log(myAtoi(' -21474836471 '));
// console.log(myAtoi(' -123aaa '));
console.log(myAtoi(' +0 123 '));
