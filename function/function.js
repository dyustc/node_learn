// var abs = function (x) {
//     if (x > 0) {
//         return x;
//     } else {
//         return -x;
//     }
// }
"use strict";
function abs() {
    if (arguments.length === 0) {
        return 0;
    }

    var x = arguments[0]
    return x > 0 ? x : -x;
}

abs(-10);
console.log(abs(10))

function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1,2,3,4)

function foo1(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
var x = 9
foo1(1, 3, 4, 5)