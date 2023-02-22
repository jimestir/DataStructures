const { node, BST } = require('../../lib/binaryTrees.js')
//creating the binary search tree
const test1 = [4, 2, 7, 1, 3, 6]
const test2 = [5, 3, 8, 2, 4, 6, 7]
const test3 = [1, 2]
const test4 = [5, 3, 8, 2, 4, 6, 9, 10]
const test5 = [6, 3, 8, 2, 4, 5, 9, 10]

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
let newBT = fillBST(test5)

// function to get the parent of the node 
function getParent(node, data) {
    //if the value of the root is equal to data
    if (node.data == data) {
        return node
    }
    //base case
    if (node.left && node.left.data == data) {
        return node
    }
    if (node.right && node.right.data == data) {
        return node
    }
    //keep looking for the parent
    if (data < node.data) {
        node = node.left
    } else {
        node = node.right
    }
    return getParent(node, data)
}

function lowestCommonAncestor(node, v1, v2) {
    let lowestV = v1
    let biggerV = v2
    if (v2 < v1) {
        lowestV = v2
        biggerV = v1
    }
    let lowestVParent = getParent(node, lowestV)
    let commonParent = lowestVParent
    let found = false
    while (!found && commonParent != null) {
        //check if you're in the root
        if (commonParent.data == node.data) {
            found = true
        }
        //verify if parent has right child
        if (!commonParent.right && commonParent.data == biggerV) {
            found = true
        }
        //veify if the right child is bigger than biggerV
        if (commonParent.right.data >= biggerV) {
            found = true
        }
        else {
            commonParent = getParent(node, commonParent.data)
        }
    }
    return commonParent.data
}
console.log(lowestCommonAncestor(newBT.root, 2, 5)) //case:1 ==> 4

function isChild(parentNode,biggerV){
    if(!parentNode){
        return 'nochild'
    }
    if(parentNode<biggerV){
        parentNode = parentNode.right
    }
    if (parentNode>=biggerV){
        return parentNode
    }

}