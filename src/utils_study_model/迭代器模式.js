// 迭代器模式
// 可以让用户透过特定的接口巡访容器中的每一个元素而不用了解底层的实现(遍历)
Object.prototype.objFunc = function(){

}
Array.prototype.arrFunc = function(){
    
}
const foods = ['apple','banana','orange']
/**
 * for in语句可以遍历一个对象的除[symbol]以外的[可枚举]属性，包括继承的可枚举属性。
 * 1.遍历的是索引
 * 2.继承而来的也可以遍历出来(原型链上动态增加的也可以遍历出来)
 */

/**
 * for of 语句可以遍历 可迭代对象
 * 包括Array，map，Set，String，TypedArray,arguments对象等等
 * 1.遍历的是值
 * 2.继承而来的无法遍历
 */
for(const iterator of foods){
    console.log(iterator,'----')
}
//1. for in 和 for of
// 迭代协议