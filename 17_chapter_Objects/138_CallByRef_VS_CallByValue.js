// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined

// Primitive, number, string, boolean, null, undefined
//Call By Value
let a = 10;
let b = a;
console.log(b);  // 10
b = 99;
console.log(a); //10
console.log(b); //99

console.log("-----")

// Objects — the reference value is copied, so both variables point to the same object.
// Reference - object, array, function
// Call By Reference
let obj1 = { val: 10 };
console.log(obj1.val); //10
let obj2 = obj1; //Reference is copied
console.log(obj1.val); //10
console.log(obj2.val); //10
obj2.val = 99; // reference value updated to 99
console.log(obj1.val); // 99- since reference is updated to now original onj1 value will also be updated
console.log(obj2.val); // 99
