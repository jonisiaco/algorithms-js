/*
Traversal Type      Visit Order             Use Case
In-Order	        Left → Root → Right	    BSTs (sorted order)
Pre-Order	        Root → Left → Right	    Tree copying, prefix expressions
Post-Order	        Left → Right → Root	    Tree deletion, postfix expressions
Level-Order	        Level by level	        Shortest path in unweighted trees
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//  1. In-Order Traversal (Left ➝ Root ➝ Right)
function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);      // Traverse left subtree
    console.log(node.value);          // Visit root
    inOrderTraversal(node.right);     // Traverse right subtree
}

// 2. Pre-Order Traversal (Root ➝ Left ➝ Right)
function preOrderTraversal(node) {
    if (node === null) return;
    console.log(node.value);          // Visit root
    preOrderTraversal(node.left);     // Traverse left subtree
    preOrderTraversal(node.right);    // Traverse right subtree
}

//  3. Post-Order Traversal (Left ➝ Right ➝ Root)
function postOrderTraversal(node) {
    if (node === null) return;
    postOrderTraversal(node.left);    // Traverse left subtree
    postOrderTraversal(node.right);   // Traverse right subtree
    console.log(node.value);          // Visit root
}

// 4. Level-Order Traversal (Breadth-First)
function levelOrderTraversal(root) {
    if (root === null) return;
    
    const queue = [root];
    
    while (queue.length > 0) {
        const current = queue.shift();    // Dequeue
        console.log(current.value);       // Visit node
        
        if (current.left) queue.push(current.left);   // Enqueue left child
        if (current.right) queue.push(current.right); // Enqueue right child
    }
}

// Example Tree:
//       A
//      / \
//     B   C
//    / \   \
//   D   E   F

const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.right = new TreeNode('F');

// Call each traversal
console.log("In-Order:");
inOrderTraversal(root); // D B E A C F

console.log("Pre-Order:");
preOrderTraversal(root); // A B D E C F

console.log("Post-Order:");
postOrderTraversal(root); // D E B F C A

console.log("Level-Order:");
levelOrderTraversal(root); // A B C D E F
        