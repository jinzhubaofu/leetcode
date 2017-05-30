/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {

    while (node && node.val !== 3) {
        node = node.next;
    }

    if (!node || !node.next) {
        return;
    }

    var next = node.next;
    node.val = next.val;
    node.next = next.next;

};

var node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4
            }
        }
    }
}

console.log(JSON.stringify(node));

deleteNode(node);

console.log(JSON.stringify(node));

node = null;
console.log(JSON.stringify(node));
deleteNode(node);
console.log(JSON.stringify(node));

node = {
    val: 1,
    next: {
        val: 2
    }
}
console.log(JSON.stringify(node));
deleteNode(node);
console.log(JSON.stringify(node));

node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3
        }
    }
}

console.log(JSON.stringify(node));
deleteNode(node);
console.log(JSON.stringify(node));
