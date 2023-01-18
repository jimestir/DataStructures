const { Queue } = require("../../lib/queue")

/*function truckTour(petrolpumps) {

    let startingPoint = 0
    let sumL = pumpsQueue.dataStore[0][0]
    let sumKm = pumpsQueue.dataStore[0][1]
    for(let j=1;j<pumpsQueue.length();j++){
        if(sumL<sumKm){
            startingPoint++
            sumL=pumpsQueue.dataStore[j][0]
            sumKm=pumpsQueue.dataStore[j][1]
            pumpsQueue.enqueue(pumpsQueue.dequeue())
        }
    }
    return startingPoint
}*/

let example = [[1,5],[10,3],[3,4]]

console.log(truckTour(example))

function truckTour(petrolpumps) {
    let minStart = 0
    let sumL = 0
    let sumKm = 0
    let dif = 0
    for (let i=0;i<petrolpumps.length;i++){
        dif += petrolpumps[i][0]-petrolpumps[i][1]
        if(dif<0){
            minStart=i+1
        }
    }
    return minStart
}
