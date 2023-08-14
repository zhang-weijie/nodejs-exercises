// define a function
function hello(){
    console.log("Hello World!");
}

// module.exports determine the item to be exported. This item can be a value, a function or an object in terms of class in OOP. 
module.exports = hello;
// redefinition of module.exports will overwrite the older one.
module.exports = "Hello World!";