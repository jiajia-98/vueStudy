//commonjs规范模块化思想
const { add, mul } = require('./mathUtils.js')

console.log(add(10, 25));
console.log(mul(6, 21));
//ES6规范
import { name, age, height } from './info'
console.log(name);
console.log(age);
console.log(height);