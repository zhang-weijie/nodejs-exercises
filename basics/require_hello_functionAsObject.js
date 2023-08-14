var module_Hello = require('./hello_functionAsObject');
//在 JavaScript 中，很多时候，你需要避免使用 new 关键字。
// In JavaScript, many times, you need to avoid using the keyword new.
hello = new module_Hello();
hello.setName("World!");
hello.sayHello();