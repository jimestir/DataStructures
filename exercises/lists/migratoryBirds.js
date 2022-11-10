const { List } = require("../../lib/List");
//converting the array into a list
let test = [1,2,3,4,5,4,3,2,1,3,4]
function toList(array) {
    const newList = new List()
    for (let i = 0; i < array.length; i++) {
        newList.append(array[i])
    }
    return newList
}
let testList = toList(test)

function migratoryBirds(list) {
    const max = list.mathMax()
    const min = list.mathMin()
    let birdTypeAndNum = new List()

    for(let i=min; i<=max; i++){
        let currentNumOfBirds = 0
        for(list.front();list.currPos()<list.length();list.next()){
            if(i==list.getElement()){
                currentNumOfBirds++
            }
        }
        let addBirdInfo = new birdInfo(i,currentNumOfBirds)
        birdTypeAndNum.append(addBirdInfo)
    }
    return getHigherType(birdTypeAndNum)
}
console.log(migratoryBirds(testList))

function getHigherType(list){
    let typeBirds = 0
    let higherNumBirds = 0
    for(list.front();list.currPos()<list.length();list.next()){
        let currentTypeBird = list.getElement()['type']
        let currentNumBirds = list.getElement()['numOfBirds']
        if(currentNumBirds>higherNumBirds){
            typeBirds=currentTypeBird
            higherNumBirds=currentNumBirds
        }      
    }
    return typeBirds
}
function birdInfo(type,numOfBirds){
    this.type = type
    this.numOfBirds = numOfBirds
}