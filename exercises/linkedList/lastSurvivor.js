const {CLList} = require('../../lib/linkedList.js')

function newCllist(qty){
    let newCllist= new CLList()
    let currNode = newCllist.head
    let i=1
    while(i<=qty){
        newCllist.insert(i,currNode.element)
        currNode=currNode.next
        i++
    }
    return newCllist
}

function lastSurvivor(compatroits,mthPerson){
    //create and fill the list
    let compatroitList = newCllist(compatroits)
    let currentItem = compatroitList.head.next.element
    let len = compatroitList.getLength()
    while(len>2)
    {
        let toKill = compatroitList.advance(mthPerson,currentItem)
        if(toKill.element =='head'){
            toKill = toKill.next
        }
        currentItem=toKill.next.element
        compatroitList.remove(toKill.element)
        if(currentItem =='head'){
            currentItem=toKill.next.next.element
        }
        console.log(toKill)
        len--
    }
    return compatroitList.display()
}  

lastSurvivor(10,2)
