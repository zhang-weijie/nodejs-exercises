//导入非js文件时需要加上后缀名
// When importing non-js files, you need to add the file suffix
var data = require('./data.json');
console.log(data);//{ name: 'data' }
console.log(data.name);//data