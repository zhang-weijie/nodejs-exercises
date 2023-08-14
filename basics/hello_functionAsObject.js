/* 函数是对象
在 JavaScript 中使用 typeof 操作符判断函数类型将返回 "function" 。
但是JavaScript 函数描述为一个对象更加准确。
JavaScript函数有属性和方法。*/

/* functions are objects
Using the typeof operator in JavaScript to determine the type of a function will return "function" .
But a JavaScript function is more accurately described as an object.
JavaScript functions have properties and methods. */

function Hello() {
    var name;
    this.setName = function (aName) {
        name = aName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;