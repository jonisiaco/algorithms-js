/*
  Depth-First Search (DFS)
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(7);
root.right.right.right = new TreeNode(8);

// Invalid BST (node 6 is misplaced)
const rootInvalid = new TreeNode(5);
rootInvalid.left = new TreeNode(3);
rootInvalid.right = new TreeNode(7);
rootInvalid.left.left = new TreeNode(2);
rootInvalid.left.right = new TreeNode(6);  // <-- This breaks BST rules
rootInvalid.right.left = new TreeNode(4);
rootInvalid.right.right = new TreeNode(8);


// Problem Solved: Finding and summing the values of the deepest leaf nodes in a binary tree.
// Traversal Strategy: DFS traverses the tree by going as deep as possible along each branch before
// Time Complexity:	O(n)
// Space (stack);	O(h), where h = tree height (O(n) worst, O(log n) best)
function deepestLeavesSum(root) {
    let maxLevel = 0;
    let sum = 0;

    function dfs(node, level) {
        if (!node) return;

        if (!node.left && !node.right) {
            if (level > maxLevel) {
                maxLevel = level;
                sum = node.val;
            } else if (level === maxLevel) {
                sum += node.val;
            }
        }

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);
    return sum;
}
console.log(deepestLeavesSum(root));

// Approach: Recursive (Depth-First Search)
// Technique: Divide and conquer + boundary checking (min/max constraints)
// Time Complexity: O(n), where n is the number of nodes (each node is visited once).
// Space Complexity: O(h)
function isValidBinarySearchTree(node, min = -Infinity, max = Infinity) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) {
        return false;
    }

    return isValidBinarySearchTree(node.left, min, node.val) &&
           isValidBinarySearchTree(node.right, node.val, max);
}
console.log('is it valid?', isValidBinarySearchTree(rootInvalid));

