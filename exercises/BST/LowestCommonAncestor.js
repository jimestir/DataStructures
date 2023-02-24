const { node, BST } = require('../../lib/binaryTrees.js')
//creating the binary search tree
const test1 = [4, 2, 7, 1, 3, 6]
const test2 = [5, 3, 8, 2, 4, 6, 7]
const test3 = [1, 2]
const test4 = [5, 3, 8, 2, 4, 6, 9, 10]
const test5 = [6, 3, 8, 2, 4, 5, 9, 10]
const test6 = [50, 40, 60, 35, 45, 59, 58, 62, 30, 37, 43, 47, 42, 41, 48, 27, 26, 28, 61, 65, 63, 64, 67]

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
let newBT = fillBST(test6)

//function to get an array of the parents
function getParents(node, data, arr) {
    //base case
    if (
        (node.left && node.left.data == data) ||
        (node.right && node.right.data == data)
    ) {
        //in case that it's child of the root
        arr.push(node.data)
        return
    }
    //keep looking for the parents
    arr.push(node.data)
    if (data < node.data) {
        node = node.left

    } else {
        node = node.right
    }
    getParents(node, data, arr)
}

function lowestCommonAncestor(node, v1, v2) {
    //set the lowest and biggest element
    let lowest = v1
    let bigger = v2
    if (v1 > v2) {
        bigger = v1
        lowest = v2
    }
    // check if both are on the same side of the tree, taking the root as reference
    if (lowest <= node.data && bigger >= node.data) {
        return node.data
    }
    else {
        const arrV1 = []
        const arrV2 = []
        getParents(node, v1, arrV1)
        getParents(node, v2, arrV2)
        let commonParents = arrV1.filter(element => {
            return arrV2.includes(element)
        })
        return commonParents[commonParents.length - 1]
    }
}
console.log(lowestCommonAncestor(newBT.root, 64, 26))