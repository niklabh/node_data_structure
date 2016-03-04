'use strict';
// Create a data structure that has fast insertion, removal, membership testing, and random selection.

function CoolStore(){
    this.map = {};
    this.array = [];    
}

CoolStore.prototype.add = function(item) {
    this.map[item.toString()] = this.array.length;  
    this.array.push(item);
};

CoolStore.prototype.remove = function(item) {
    var last = this.array.pop();
    var index = this.map[item.toString()];
    delete this.map[item];
    if (last === item) return
    this.array[index] = last;
    this.map[last] = index;
};

CoolStore.prototype.test = function(item) {
    return this.map[item.toString()] !== undefined;
};

CoolStore.prototype.random = function() {
    return this.array[Math.floor(Math.random() * this.array.length)];
};

module.exports = CoolStore;

if (require.main === module) {
    var store = new CoolStore();

    store.add("a");
    store.add("b");
    store.add("c");
    store.add("d");
    store.add("e");

    store.remove("e");

    console.log(store);

    store.remove("b");

    console.log(store);

    console.log(store.test("a"));
}


