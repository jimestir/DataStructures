const { Stack } = require("../../lib/stack");
const exp = '2.3+23/12+(3.14(159)*24'
const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
}
function balanceParantheses(exp) {
    let orderStk = new Stack()
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] == '(' || exp[i] == '[' || exp[i] == '{') {
            orderStk.push({signo:exp[i],position:i})
        }
        if (exp[i] === ')' || exp[i] === ']' || exp[i] === '}') {
            // if it's empty || not a pair
            if (orderStk.peek() === undefined || exp[i]!==pairs[orderStk.peek()['signo']]) {
                console.log('Mismatched ' + exp[i] + 'at ' + i)
            }
            else {
                orderStk.pop()
            }
        }

    }
    
    if (orderStk.length() === 0) {
        console.log('balanced equation')
    } else if (orderStk.length() === 1) {
        console.log('mismatched at ' + orderStk.peek()['position'])
    }
}
balanceParantheses(exp)