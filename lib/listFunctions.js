const { List } = require("../../lib/List");
function toList(array){
    let newList = new List()
    for(let i=0;i<array.length;i++){
        newList.append(array[i])
    }
    return newList
}
function joinLists(listA,listB){
    let listC = new List()
    for(listA.front(); listA.currPos() < listA.length(); listA.next()) {
        listC.append(listA.getElement())
       }
    for(listB.front(); listB.currPos() < listB.length(); listB.next()) { 
        listC.append(listB.getElement()) 
    }
    return listC
}
module.exports= {
    toList,
    joinLists
}