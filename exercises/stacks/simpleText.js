const { Stack } = require("../../lib/stack");
// solution: [0,123456,1234,1234456,1234456789,1234456,1234456789]
let ex = ['1 123456', '2 2', '3 3', '1 456', '1 789', '2 3', '4']
//solution: '',''
let ex2 = ['1 123', '2 3', '3 2', '1 78', '4']
//solution: cya
let ex3 = ['1 abc','3 3','2 3','1 xy','3 2','4','4','3 1']

let lastStr = new Stack()
let s = ''
function processData(input) {
    for (let i = 0; i < input.length; i++) {
        let op = input[i].slice(0, 1)
        let strg = input[i].slice(1).trim()
        if (op == '1') {
            s+=strg
            lastStr.push(s)
        }
        else if (op == '2') {
            s=s.slice(0,-strg)
            lastStr.push(s)
            lastOpType = 2
        }
        else if (op == '3') {
            if(s.length>=1){
                console.log(s[strg - 1])
            }
        }
        else if (op == '4') {
            lastStr.pop()
            s=lastStr.peek()
        }
    }
}

console.log(processData(ex3))