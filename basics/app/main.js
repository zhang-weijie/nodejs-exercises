// counter.js不会因为被require了两次而初始化两次。
// counter.js will not be initialized twice even though it is required twice.
var counter1 = require('./counter');
var counter2 = require('./counter');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());