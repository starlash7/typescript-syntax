"use strict";
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greet("662"));
console.log(greet("662", "Bye"));
