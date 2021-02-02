// 方法: 对象的函数
// 实现了 function_counter, 利用了apply
'use strict'
function getAge() {
    var y = new Date().getFullYear()
    return y - this.birth
}

let xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: getAge
}

// console.log(xiaoming.age)
// console.log(xiaoming.age())
console.log(getAge.apply(xiaoming, []))
