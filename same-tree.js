/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    if (p.length !== q.length) {
        return false;
    }

    if (p.length === 0) {
        return true;
    }

    return hehe(p, q, 0);


};

function hehe(p, q, index) {

    if (p[index] !== q[index]) {
        return false;
    }

    if (index > p.length) {
        return true;
    }

    return hehe(p, q, index * 2 + 1) && hehe(p, q, index * 2 + 2);

}

var p = [5,4,7,3,null,2,null,-1,null,9];
var q = [5,4,7,3,null,2,null,-1,null,9];

console.log(isSameTree(p, q));

var p = [];
var q = [];

console.log(isSameTree(p, q));

var p = [5,4,7,3,null,2,null,-1,null,9];
var q = [5,4,7,3,null,3,null,-1,null,9];

console.log(isSameTree(p, q));

