function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
   }
   function push(element) {
    this.dataStore[this.top++] = element;
   }
   function peek() {
    return this.dataStore[this.top-1];
   }
   function pop() {
    return this.dataStore[--this.top];
   }
   function clear() {
    this.top = 0;
   }
   function length() {
    return this.top;
   }

   const stk1 = [4, 2, 4, 6, 1]
   const stk2 = [2, 1, 8, 5]
function twoStacks(maxSum, a, b) {
    let sum = 0
    let counter = 0
    let lastNum = 0
    let nextNum= 0
    while (sum < maxSum) {
        if (a[0] < b[0]) {
            lastNum=a[0]
            sum += a.shift()
            if(lastNum+nextNum<maxSum)
            counter++
            nextNum=a[0]
        }
        else {
            lastNum=a[0]
            sum += b.shift()
            if(lastNum+nextNum<maxSum)
            counter++
            nextNum=b[0]
        }
    }
    return counter
}
console.log(twoStacks(10,stk1,stk2))
