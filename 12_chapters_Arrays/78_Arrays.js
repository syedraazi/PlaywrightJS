let fruits = [];
console.log(typeof fruits);                       // o/p -> object

let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers.length);        // o/p -> 3

console.log(browsers.at(0));         // o/p -> chrome
console.log(browsers[0]);            // o/p -> chrome

//JavaScript arrays don’t support negative indexes.
console.log(browsers[-1]);           // o/p -> webkit  

// JavaScript arrays don’t support negative indexes so we use the "" at() "" method to access the last element of the array.
console.log(browsers.at(-1));        // o/p -> webkit
