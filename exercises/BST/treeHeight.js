const { node, BST } = require('../../lib/binaryTrees.js')

//create the tree to get its height
let nodeValues = [3,1,7,5,4]
function fillBST(arr) {
    let newBST = new BST()
    for (let i = 0; i < arr.length; i++) {
        let currData = arr[i]
        let currNode = newBST.find(currData)
        if (currNode == null) {
            newBST.insert(currData)
        }
        else {
            newBST.update(currData)
        }
    }
    return newBST
}
let newBT = fillBST(nodeValues)
let rootBT = newBT.root

function treeHeight(root) {
    if(root==null || root.left==null && root.right==null){
        return 0
    }
        let left = treeHeight(root.left)
        let right = treeHeight(root.right)
        return Math.max(left,right)+1
}
console.log(treeHeight(rootBT))
