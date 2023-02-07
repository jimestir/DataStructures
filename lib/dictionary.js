//The primary purpose of a dictionary is to retrieve a value 
//by referencing its key

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
    this.showValues = showValues;
    this.sortDic = sortDic;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    const dictionary = this.datastore
    Object.keys(this.datastore).sort().forEach(function (key, index) {
        console.log(key + "->" + dictionary[key]);
    })
}

function showValues(){
    const dictionary = this.datastore
    Object.keys(this.datastore).sort().forEach(function (key, index) {
        console.log(key);
    })
}

function count() {
    let n = 0;
    Object.keys(this.datastore).forEach(function (key, index) {
        n++
    })
    return n;
}

function clear() {
    const dictionary = this.datastore
    Object.keys(this.datastore).forEach(function (key, value) {
        delete dictionary[key]
    })
}

function sortDic(){
    const dictionary = this.datastore
    Object.keys(this.datastore).sort()
    return dictionary
}


module.exports = {
    Dictionary
}

