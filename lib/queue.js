function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.frontEnqueue = frontEnqueue;
   }
   function enqueue(element) {
    this.dataStore.push(element);
   }
   function dequeue() {
    return this.dataStore.shift();
   }
   function front() {
    return this.dataStore[0];
   }
   function back() {
    return this.dataStore[this.dataStore.length-1];
   }
   function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
    }
    return retStr;
   }
   function empty() {
    if (this.dataStore.length == 0) {
    return true;
    }
    else {
    return false;
    }
   }
   function frontEnqueue(element){
    if(this.dataStore.length()==0){
        this.enqueue(element)
    }
    else {
        this.dataStore.unshift(element)
    }
   }
   function backDequeue(){
    this.dataStore.pop()
   }
   module.exports= {
    Stack
}