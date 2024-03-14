// app.js
/*
// 解構賦值
import {add, subtract} from './calculate.js';
import {PI, E} from './constants.js';

console.log(PI);
console.log(E);
console.log(add(2, 3));
console.log(subtract(5, 2));
*/

/*
// 全部 + 存成變數
import * as Calculate from './calculate.js';
import * as Constants from './constants.js';
console.log(Calculate.add(2, 3));
console.log(Calculate.subtract(5, 2));
console.log(Constants.PI);
console.log(Constants.E);
*/

// 有預設輸出時用
import Main from './calculate.js';
Main();
