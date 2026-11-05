function calculate(a, b, operation) {
    return operation(a, b);
}

////Using Normal function
console.log("This is using Normal function->");
let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);

//Using Arrrow function
console.log("This is using Arrow function->");
let mul=calculate(10, 5, (x,y)=> x*y);
console.log(mul);