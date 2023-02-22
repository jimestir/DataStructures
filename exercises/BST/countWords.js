const { node, BST } = require('../../lib/binaryTrees.js')

//Write a program that stores the words from a large text file in a BST and 
//displays the number of times each word occurs in the text.

function countWords(text) {
    let txtSplitted = text.split(' ')
    let BST = fillBST(txtSplitted)
    traverseInOrder(BST.root)
}
countWords('hola como estas hola estas')

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

function traverseInOrder(node) {
    if (!(node == null)) {
        traverseInOrder(node.left);
        console.log("word:" + node.show() + " | occurrences:" + node.count);
        traverseInOrder(node.right);
    }
}