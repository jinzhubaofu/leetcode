/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    var result = [];

    if (!root) {
        return result;
    }

    var queue = [root];
    var currentLevelCount = 1;
    var currentLevel = 0;
    var nextLevelCount = 0;

    while (queue.length) {

        var top = queue.shift();

        if (top) {

            var levelArray = result[currentLevel];

            if (!levelArray) {
                levelArray = result[currentLevel] = [];
            }

            levelArray.push(top.val);

            if (top.left) {
                nextLevelCount++;
                queue.push(top.left);
            }

            if (top.right) {
                nextLevelCount++;
                queue.push(top.right || null);
            }

        }

        currentLevelCount--;

        if (!currentLevelCount) {
            currentLevel++;
            currentLevelCount = nextLevelCount;
            nextLevelCount = 0;
        }

    }

    return result;

};

var root = {
    val: 3,
    left: {
        val: 9
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
};

console.log(levelOrder(root));
