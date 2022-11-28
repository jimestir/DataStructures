const { Queue } = require("../../lib/queue");


function isPalindrome(arr) {
    let reversedArr = new Queue()
    let rightArr = new Queue()
    let letters = /^[a-zA-Z]*$/

    for (let i = 0; i < arr.length; i++) {
        if (letters.test(arr[i]) == true) {
            reversedArr.frontEnqueue(arr[i])
            rightArr.enqueue(arr[i])
        }

    }
    if (reversedArr.toString().toLowerCase() == rightArr.toString().toLowerCase()) {
        return 'YES'
    } else {
        return 'NO'
    }
}
console.log(isPalindrome('A man, a plan, a canal: Panama'))
