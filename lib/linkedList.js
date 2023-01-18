//The Node class consists of two properties: 
//element(store the node’s data)

const { get } = require("https");

//next(stores a link to the next node in the linked list)
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.advance = advance;
    this.findPrevious = findPrevious;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}
function advance(n,item) {
    var current = this.find(item);
    while (n-1 > 0 && current.next !== null) {
        current = current.next
        if(current.element=='head'){
            current=current.next
        }
        n--
    }
    return current
}
function findTail() {
    let currNode = this.head
    while (currNode != null) {
        currNode = currNode.next
    }
    return currNode.data
}

function reverse() {
    let tail = findTail()
    let prev = findPrevious(tail)
    while (prev != null) {
        tail = prev
    }
    return tail
}
// circular lists 
function CLList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = displayCLL;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.advance = advance;
    this.getLength = getLength;
}
function displayCLL() {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function getLength() {
    var currNode = this.head;
    let length = 0
    while (!(currNode.next == null) &&
        !(currNode.next.element == "head")) {
        length++
        currNode = currNode.next;
    }
    return length
}
module.exports = {
    LList,
    CLList
}