const { Queue } = require("./queue");

function PriorityQueue() {
    const that = new Queue();
    that.dequeue = dequeueWithPriority;
    that.toString = toString;

    function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i].name + " code: "
                + this.dataStore[i].code + "\n";
        }
        return retStr;
    }
    function dequeueWithPriority() {
        var priority = this.dataStore[0].code;
        let indexPriority = 0
        for (var i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code < priority) {
                indexPriority = i;
                priority = this.dataStore[i].code
            }
        }
        return this.dataStore.splice(indexPriority, 1);
    }

    return that;
}

module.exports = {
    PriorityQueue,
}
