/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result = null;

  var current = null;

  var addition = 0;

  while (l1 || l2) {
    var val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + addition;

    if (val > 9) {
      val %= 10;
      addition = 1;
    } else {
      addition = 0;
    }

    var next = {
      val: val,
      next: null
    };

    if (!current) {
      result = current = next;
    } else {
      current.next = next;
      current = next;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  if (addition) {
    current.next = {
      val: 1,
      next: null
    };
  }

  return result;
};

console.log(
  addTwoNumbers(
    { val: 1, next: { val: 2, next: { val: 3 } } },
    { val: 1, next: { val: 2, next: { val: 3 } } }
  )
);

console.log(
  addTwoNumbers({ val: 9 }, { val: 1, next: { val: 2, next: { val: 3 } } })
);

console.log(
  addTwoNumbers(
    { val: 1, next: { val: 5, next: { val: 3 } } },
    { val: 9, next: { val: 4, next: { val: 6 } } }
  )
);
