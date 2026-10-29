/* The rule: if a - b is positive, a is bigger and has to move after b, 
 so they swap. Otherwise they stay as they are.   */

let nums = [10,1,21,2];
nums.sort((a,b) => a-b);  // is output is (-ve) keep as is and if (+ve) swap
console.log(nums);

nums.sort((a,b) => b-a);  // is output is (-ve) keep as is and if (+ve) swap
console.log(nums);

let fruits = ['banana','apple',"cherry"];
fruits.sort((a, b) => a.localeCompare(b))
console.log(fruits);


// arrow Functions