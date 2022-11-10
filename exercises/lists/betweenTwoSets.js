const { List } = require("../../lib/List");

let test1 = [2,6]
let test2 = [24,36]
function toList(array){
    let newList = new List()
    for(let i=0;i<array.length;i++){
        newList.append(array[i])
    }
    return newList
}
const tes1 = toList(test1)
const tes2 = toList(test2)

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


function getTotalX(a, b) {
    let range = joinLists(a,b)
    let min = range.mathMin()
    let max = range.mathMax()
    let counter = 0
    let l = min
    //loop through the range
    while(l>=min && l<=max){
        if(areFactorsOf(l,a,b)==true){
            counter++
        }
        l++
    }
    return counter
}

console.log(getTotalX(tes1,tes2))

function areFactorsOf(num,a,b){
    let itIs = true
    let theyAre = true
    a.front()
    //int being numerator
    while(a.currPos()<a.listSize && theyAre){
        if(num%a.getElement()!==0){
            theyAre = false
        }
        a.next()
    }
    //int being demoninator
    b.front()
    while(b.currPos()<b.listSize && itIs){
        if(b.getElement()%num!==0){
            itIs = false
        }
        b.next()
    }
    //returning a boolean
    return itIs && theyAre
}

