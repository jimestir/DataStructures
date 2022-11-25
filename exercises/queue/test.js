
let ex = [1,2,3,4,5,6]

function addFront(element,array){
    array[1]=array[0]
    array[0]=element
    array[2]=array[1]
    for(i=0;i<array.length;i++){
        console.log(array[i+1])
    }
    return array
}
console.log(addFront(9,ex))