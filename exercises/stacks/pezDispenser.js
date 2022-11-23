const { Stack } = require("../../lib/stack");
let sequence = new Stack()
sequence.push('red')
sequence.push('yellow')
sequence.push('white')
sequence.push('yellow')
sequence.push('red')
sequence.push('white')
sequence.push('green')
sequence.push('yellow')
console.log(pezDispenser(sequence))
function pezDispenser(stack){
    let noYellow = new Stack()
    let result = new Stack()
    while(stack.length()>0){
        if(stack.peek()!=='yellow'){
            noYellow.push(stack.peek())
        }
        stack.pop()
    }
    while(noYellow.length()>0){
        result.push(noYellow.pop())
    }
    return result
}

