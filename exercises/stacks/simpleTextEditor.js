let lastStr = new Stack()
let s = ''
function processData(input) {
    const sepInput = input.split('\n')
    for (let i = 1; i < sepInput.length; i++) {
        let values = sepInput[i].split(' ')
        let op = values[0]
        let strg = values[1]

        if (op == '1') {
            s += strg
            lastStr.push(s)
        }
        else if (op == '2') {
            s = s.slice(0, -strg)
            lastStr.push(s)
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