// note that function is defined anonymly and assigned to the variable hello
exports.hello = function (){
    console.log("Hello World by hello!");
}

// we can also define a named function and export it with an extra export
function hello2 (){
    console.log("Hello World by hello2!");
}
exports.hello2 = hello2;

// we can export not only functions, but also attributes
hello3 = "Hello World by hello3!";
exports.hello3 = hello3;

// we can export a value directly as well
exports.hello4 = "Hello World by hello4!";