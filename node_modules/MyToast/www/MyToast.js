var exec = require('cordova/exec');

// MyToast 是plugin.xml文件中的feature标签 name属性
// showToast：是js中调用的方法名
// [arg0]: 表示一个参数，[arg0,arg1]:表示两个参数
// 注意exports.showToast是表示方法
exports.showToast = function (arg0, success, error) {
    exec(success, error, 'MyToast', 'showToast', [arg0]);
};