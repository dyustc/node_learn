'use strict'

var sum = function(a, b, f) {
    return f(a) + f(b)
}

console.log(sum(-2, 3, Math.abs))