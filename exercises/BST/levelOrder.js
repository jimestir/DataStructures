const { node, BST } = require('../../lib/binaryTrees.js')

function levelOrder(root){
    let tempQueue = []
    let result = []

    if(root!=null){
        tempQueue.push(root)
        while(tempQueue.length>0){
            let currNode = tempQueue.shift()
            result.push(currNode.data)
            if(currNode.left!=null){
                tempQueue.push(currNode.left)
            }
            if(currNode.right!=null){
                tempQueue.push(currNode.right)
            }
        }
        return result
    }
    else {
        return null
    }
}