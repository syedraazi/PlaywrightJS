let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result);  // 25

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);    // 1

let a=nums.findLast(n => n > 20); //  45
console.log(a);
let b=nums.findLastIndex(n => n > 20); // 3
console.log(b);