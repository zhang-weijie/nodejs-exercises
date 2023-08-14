//在其它模块里使用包的时候，需要加载包的入口模块main.js。
//When using the package in other modules, the entry module main.js of the package needs to be required.
var app_main = require('./app_main/main');
console.log(app_main.create('name'));//{ name: 'name', head: 'head', body: 'body' }

//当模块的文件名是index.js，加载模块时可以使用模块所在目录的路径代替模块文件路径
//When the file name of the module is index.js, the path of the directory where the module is located can be used instead of the module file path when loading the module
var app_index = require('./app_index');
console.log(app_index.create('name'));//{ name: 'name', head: 'head', body: 'body' }

//如果想自定义入口模块的文件名和存放位置，就需要在包目录下包含一个package.json文件，并在其中指定入口模块的路径。
//If you want to customize the file name and storage location of the entry module, you need to include a package.json file in the package directory, and specify the path of the entry module in it.
var app_package_json = require('./app_package_json/js/main');
console.log(app_index.create('name'));//{ name: 'name', head: 'head', body: 'body' }