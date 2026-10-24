// Compasion Operator (will always result in the boolean, true or false)
// = - Assignment Operator
// == -> losse comparsion ( pizza vs pizza )
// === -> strict comparsion ( dom pizza vs pizzahut pizza , brand, toppings etc)
// > , < , >= , <= 


console.log(3 > 4); //false
console.log(3 < 4); // true
console.log(4 >= 4);   // true

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.
console.log(5 == "5"); // lose couple comparsion , will check only value // true
console.log(5 === "5"); // stict not allowed , willl check value + datatype both // false


// ! -> not char
console.log(5 != "5"); // false (as it is only checking the value so its {not equal to (!=)} as it should be equal)
console.log(5 !== "5"); // true (as it is checking both value + DataType so its {not equal to (!=)} as it is not equal

console.log(5 === 5); // true (as it is checking both value + DataType so its {equal to (===)} as it is equal)



console.log("5" + 3);
console.log("5" - 3);
