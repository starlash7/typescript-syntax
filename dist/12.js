"use strict";
// function identity<T>(arg: T): T {
//     return arg;
// }
// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);
function identityNumber(arg) {
    return arg;
}
function identityString(arg) {
    return arg;
}
console.log(identityNumber(10));
console.log(identityString("10"));