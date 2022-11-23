const { Stack } = require("../../lib/stack");

function equalStacks(h1, h2, h3) {
    const hgt1 = h1
    const hgt2 = h2
    const hgt3 = h3

    let sumH1 = hgt1.reduce((a,b)=>a+b,0)
    let sumH2 = hgt2.reduce((a,b)=>a+b,0)
    let sumH3 = hgt3.reduce((a,b)=>a+b,0)

    let areNotEquals = true
    while(areNotEquals){
        let min = findMin(sumH1,sumH2,sumH3) 
        if(sumH1==sumH2 && sumH2==sumH3){
            areNotEquals=false
        }
        if(sumH1>min){
            sumH1 -= hgt1.shift()
        } 
        else if(sumH2>min){
            sumH2 -= hgt2.shift()
        }
        else if (sumH3>min){
            sumH3 -= hgt3.shift()
        }
    }
    return sumH2
}

function findMin(h1,h2,h3){
    let min = h1
    if(min>h2){
        min = h2
    }
    if(min>h3){
        min=h3
    }
    return min
}
