
const {List} = require('../../lib/List.js')
//creating a list to test the function
let listTest = new List()
listTest.append('ola')
listTest.append('olu')
listTest.append('ole')
listTest.append('oli')
listTest.append('ala')
listTest.append(2)

function insertSmaller(element,list){
    let i=0
    let isNotSmaller = true
    while(i<list.length() && isNotSmaller){
        if(element < list.getElement(i)){
            list.insert(element,list.getElement(i))
            isNotSmaller=false
        }
        i++
    }
}

insertSmaller('zapa',listTest)
insertSmaller(10,listTest)
console.log(listTest.toString())