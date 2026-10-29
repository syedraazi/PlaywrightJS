let scores = [45, 82, 91, 60, 73];

//map() transforms every item and returns a new array of the same length.
// Map
let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);

//filter() keeps only the items that pass a test and returns a new array that is the same size or smaller.
// Filter
let passing = scores.filter(s => s >= 70);
console.log(passing);