//1.commonjs规范模块化思想
const { add, mul } = require('./js/mathUtils.js')

console.log(add(10, 25));
console.log(mul(6, 21));
//2.ES6规范引入
import { name, age, height } from './js/info'
console.log(name);
console.log(age);
console.log(height);
// 3.引入css模块
require('./css/normal.css');
// 4.引入less模块
require('./css/special.less');
// document.writeln('<h2>你好啊 jiajia</h2>')
// 5.引入url 图片

//6.引入vue
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/App.vue'
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})