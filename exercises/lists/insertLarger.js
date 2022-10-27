const {List} = require('../../lib/List.js')
//creating a list to test the function
let listTest = new List()
listTest.append('ola')
listTest.append('olu')
listTest.append('ole')
listTest.append('oli')
listTest.append('ala')
listTest.append(2)


function insertLarger(element,list){
        let i=0
        let isNotLarger = true
        while(i<list.length() && isNotLarger){
            if(element > list.getElement(i)){
                isNotLarger=false
                list.insert(element,list.getElement(i))
            }
            i++
        }
}

insertLarger('zapa',listTest)
insertLarger(10,listTest)
console.log(listTest.toString())