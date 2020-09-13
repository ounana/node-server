/**
 * Symbol
 * 独一无二的值
 * 对象属性名不被重写
 * 
 * 一般用作私有唯一属性
 * 对象创建者的属性，不会被对象使用者的自定义属性冲突
 * 
 */


const name=Symbol()
const person={}
person[name]='花花'
person['name']='狗蛋'//无法重写

console.log(person)
console.log(person[name])
console.log(person['name'])