// app.js
/*
// 解構賦值
const {add, subtract} = require('./calculate.js');
const {add: add2} = require('./calculate2.js');
const {PI, E} = require('./constants.js');

console.log(PI);
console.log(E);
console.log(add(2, 3));
console.log(subtract(5, 2));
*/

// 全部
const calculate = require('./calculate.js');
const constants = require('./constants.js');

console.log(constants.PI);
console.log(constants.E);
console.log(calculate.add(2, 3));
console.log(calculate.subtract(5, 2));
