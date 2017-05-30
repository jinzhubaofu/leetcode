/**
 * @constructor
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    var minStack = this.minStack;
    if (minStack.length) {
        var min = minStack[minStack.length - 1];
        minStack.push(min < x ? min : x);
    }
    else {
        this.minStack.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

var stack = new MinStack();

// stack.push(1);
stack.push(2);
stack.push(3);
stack.push(1);

console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
