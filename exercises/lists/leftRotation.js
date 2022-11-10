const { List } = require("../../lib/List");

let array = [5, 6, 2, 3]
//converting the array into a list
function toList(array) {
    const newList = new List()
    for (let i = 0; i < array.length; i++) {
        newList.append(array[i])
    }
    return newList
}

function copyList(list) {
    let copyList = new List
    for (list.front(); list.currPos() < list.length(); list.next()) {
        copyList.append(list.getElement())
    }
    return copyList
}

function leftRotation(array, d) {
    const newLista = toList(array)
    let copyLista = copyList(newLista)
    for (copyLista.front(); copyLista.currPos() < d; copyLista.next()) {
        copyLista.append(copyLista.getElement())
    }
    copyLista.dataStore.splice(0, d)
    return copyLista.toString()
}

console.log(leftRotation(array, 2))


console.log(rightRotation2(array, 2))

function rightRotation2(array, d) {
    const newLista = toList(array)
    let copyLista = copyList(newLista)
    let i = 0
    copyLista.end()
    while(i<d){
        copyLista.dataStore.splice(0,0,copyLista.getElement())
        i++
    } 
    copyLista.dataStore.splice(copyLista.listSize,d)
    return copyLista.toString()
}