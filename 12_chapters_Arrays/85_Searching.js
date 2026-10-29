let results = ["pass", "fail", "pass", "error", "fail"];
console.log(results);

let a=results.indexOf("fail"); //1
console.log(a);

let b=results.indexOf("skip");  // -1
console.log(b);

//lastIndexOf — searches from the end
let c=results.lastIndexOf("fail");
console.log(c);

// includes — returns boolean
let abc=results.includes("error"); // true
console.log(abc);