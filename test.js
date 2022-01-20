// var arr=['12','32','89','12','12','78','12','32'];
//     // 最简单数组去重法
//     function unique1(array){
//         var n = []; //一个新的临时数组
//         for(var i = 0; i < array.length; i++){ //遍历当前数组
//             console.log(n.indexOf(array[i]))
//             if (n.indexOf(array[i]) == -1)
//                 n.push(array[i]);
//         }
//         return n;
//     }
//     arr=unique1(arr);
//     console.log(arr)
// es6方法数组去重
// arr=[...new Set(arr)];
// console.log(arr)
// es6方法数组去重，第二种方法
// function dedupe(array) {
//   return Array.from(new Set(array));       //Array.from()能把set结构转换为数组
// }
// var str  = 'hello world'
// str instanceof String
// var str1  = new String('hello world')
// console.log(str1 instanceof String)
// var a = []
// console.log(typeof a)
// var b = {}
// console.log(typeof b)
//typeof对于对象来说，除了函数都会显示object,所以typeof并不能判断变量到底是什么类型
// 若果想判断一个对象是什么类型，就要使用instanceOf，因为内部机制是通过原型链来判断的
// const a = 1


// const obj = {
//     a : 2,
//     foo : foo
// }
// function foo(){
//     console.log(this.a)
// }

// obj.foo()
// foo()
// const c = new foo()
// 闭包定义：函数A内部有一个函数B，函数B可以访问函数A中的变量，那么函数B就是闭包

// for(var i = 1; i<=5; i++){
//     setTimeout(function timer(){
//         console.log(i)
//     }, i * 1000)
// }
// for(let i = 1; i<=5; i++){
//     setTimeout(function timer(){
//         console.log(i)
//     }, i * 1000)
// }
// for(var i = 1; i<=5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }

//使用闭包解决var定义函数问题解决方法
// for (let i = 0; i <= 5; i++) {
//     ;(function (j) {
//         setTimeout(() => {
//             console.log(i)
//         }, j*1000);
//     })(i)
    
// }
//推荐使用let声明变量的原则来解决

// 深浅拷贝 通过Object.assign来解决这个问题
// 浅拷贝：Object.assign
//深拷贝：JSON.parse(JSON.Stringify(object))

// 使用Object.assign来进行浅拷贝
// let a = {
//     age : 1
// }
// let b = Object.assign({},a)
// a.age = 2
// console.log(b.age)

// 使用展开运算符...来实现浅拷贝
// let a = {
//     age : 1
// }
// let b ={...a}
// a.age = 2
// console.log(b.age)

// 通常浅拷贝就可以解决大部分问题
// 浅拷贝只能解决一层问题，如果接下去的值还有对象的话，就需要使用到深拷贝
// 深拷贝 JSON.parse(JSON.stringify(object))
// let a = {
//     age : 1,
//     job:{
//         first: 'ff'
//     }
// }

// let b = JSON.parse(JSON.stringify(a))
// a.job.first = '123'
// console.log(b.job.first)

// 该方法也有局限性：会忽略 undefined
// 会忽略 symbol
// 不能序列化函数
// 不能解决循环引用的对象

// var let 以及const的区别
// 函数提升优于变量提升，函数提升会把蒸个函数挪到作用域定顶部，变量提升只会把声明挪到作用域顶部
// var 存在提升，我们能在申明前使用。let const 因为暂时性死区的原因，不能在声明前使用
// var 在全局作用域下申明变量，会导致变量挂载在Window上，其他两者不会
// let 和 const的作用基本一致，但是const申明的变量不能再次赋值

/**************************************************/
// 原型如何实现继承，Class如何实现继承？Class本质是什么？
// class Person{}
// console.log(Person instanceof Function)
//组合继承是最常用的继承方式
// function Parent(value){
//     this.val = value
// }
// Parent.prototype.getValue = function(){
//     console.log(this.val)
// }
// function Child(value){
//     Parent.call(this,value)
// }
// Child.prototype = new Parent()

// const child = new Child(1)

// child.getValue()
// child instanceof Parent
/***********************************************/
