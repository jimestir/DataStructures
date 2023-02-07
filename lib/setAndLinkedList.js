function Node(element) {
    this.element = element;
    this.next = null;
}

function LListSet() {
    this.head = new Node("head");
    this.find = find;
    this.insertInOrder = insertInOrder;
    this.insert = insert;
    this.display = display;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.size = size;
    this.difference = difference;
    this.findHigher = findHigher;
    this.findLower = findLower;
}

function find(element) {
    var currNode = this.head;
    while (currNode.element != element) {
        currNode = currNode.next;
    }
    return currNode;
}

function insertInOrder(element) {
    let newNode = new Node(element)
    //if the element is empty
    if (this.head.next == null) {
        this.head.next = newNode
        return
    }
    let current = this.head
    let prev = null
    let inserted = false
    while (current && !inserted) {
        //if the element is lower than the elements in the llist
        if (element <= current.element && current.element != 'head') {
            newNode.next = current
            prev.next = newNode
            inserted = true
        }
        prev = current
        current = current.next
    }
    //if the element is bigger 
    if (!inserted) {
        newNode.next = current
        prev.next = newNode
    }
}

function insert(newElement, node) {
    var newNode = new Node(newElement);
    var currNode = this.find(node);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findHigher() {
    let currNode = this.head
    while (currNode != null) {
        currNode = currNode.next
    }
    return currNode.data
}

function contains(element) {
    let currNode = this.head
    while (currNode) {
        if (currNode.element == element) {
            return true
        }
        currNode = currNode.next
    }
    return false
}

function union(set) {
    const tempNode = new LListSet()
    let currNode = this.head
    let setCurrNode = set.head
    while (currNode) {
        if (!(currNode.element == 'head')) {
            tempNode.insertInOrder(currNode.element)
        }
        currNode = currNode.next
    }
    while (setCurrNode) {
        if (!tempNode.contains(setCurrNode.element)) {
            tempNode.insertInOrder(setCurrNode.element)
        }
        setCurrNode = setCurrNode.next
    }
    return tempNode.display()
}

function intersect(set) {
    const tempNode = new LListSet()
    let currNode = this.head.next
    while (currNode) {
        if (set.contains(currNode.element)) {
            tempNode.insertInOrder(currNode.element)
        }
        currNode = currNode.next
    }
    return tempNode.display()
}

function size(set) {
    let currNode = this.head
    let length = 0
    while (currNode) {
        if (currNode.element != 'head'){
            length++
        }
        currNode=currNode.next
    }
    return length
}

function subset(set) {
    //check for the size - it has to lower than the argument
    if (this.size() > set.size()) {
        return false
    }
    else {
        let currNode = this.head
        while(currNode){
            if(!set.contains(currNode.element)){
                return false
            }
            currNode=currNode.next
        }
        return true
    }
}

function difference(set){
    let newSet = new LListSet()
    let currNode = this.head
    while(currNode){
        if(!set.contains(currNode.element) && currNode.element!='head'){
            newSet.insertInOrder(currNode.element)
        }
        currNode = currNode.next
    }
    return newSet.display()
}

function findHigher(ref){
    let currHigher = this.head.next
    while(currHigher){
        if(ref<currHigher.element){
            return currHigher.element
        }
        currHigher=currHigher.next
    }
    return "there's not a higher num"
}
function findLower(ref){
    let currLower = this.head.next
    while(currLower){
        if(currLower.element<ref){
            return currLower.element
        }
        currLower=currLower.next
    }
    return "there's not a lower num"
}
module.exports = {
    LListSet
}