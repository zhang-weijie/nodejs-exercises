var module_hello = require('./export_hello');
module_hello.hello();
module_hello.hello2();
console.log(module_hello.hello3);
console.log(module_hello.hello4);

var module_hello2 = require('./module_hello');
//module_hello2();
console.log(module_hello2);