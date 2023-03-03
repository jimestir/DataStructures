const { Stack } = require("../../lib/stack");
let test1 = 'A+B*C-D*E'
// ans= ABC*+DE*-
let test2 = '((A+B)*C-D)*E'
//ans = AB+C*D-E*
let test3 = 'a*(b+c)'
//ans = abc+*
console.log(infixToPostfix(test3))

function infixToPostfix(exp) {
    let operators = new Stack()
    let finalExp = ''

    for (let i = 0; i < exp.length; i++) {
        if (isOperand(exp[i])) {
            finalExp += exp[i]
        }
        else if (isOperator(exp[i])) {
            while (operators.length() > 0 && hasHigherPrec(exp[i], operators.peek()) && operators.peek() != '(') {
                finalExp += operators.peek()
                operators.pop()
            }
            operators.push(exp[i])
        }
        else if (exp[i] == '(') {
            operators.push(exp[i])
        }
        else if (exp[i] == ')') {
            while (operators.length() > 0 && operators.peek() != '(') {
                finalExp += operators.peek()
                operators.pop()
            }
            operators.pop()
        }
    }
    while (operators.length() > 0) {
        finalExp += operators.peek()
        operators.pop()
    }
    return finalExp
}


function isOperand(exp) {
    const operator = new RegExp(/[a-zA-Z0-9]/)
    return operator.test(exp) == true
}

function isOperator(exp) {
    if (exp == '+' || exp == '-' || exp == '*' || exp == '/' || exp == '^') {
        return true
    } else {
        return false
    }
}

function hasHigherPrec(exp, top) {
    const priority = {
        '^': 1,
        '*': 2,
        '/': 2,
        '+': 3,
        '-': 3
    }
    //check if the top of the stack has higher precedence
    if (priority[top] <= priority[exp]) {
        return true
    } else {
        return false
    }
} 
