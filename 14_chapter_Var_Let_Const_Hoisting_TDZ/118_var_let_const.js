// var is actual traitor - cheator
// let is sincere person
// const is just const which will not change.

// VARIABLE - Fn Scoped

var a = 10;
console.log(a); // 10   new value of var
function printHello() {
    console.log("Hello TheTestingAcademy");
    var a = 20;
    console.log(a); // 20   new value of var
    if (true) {
        var a = 30;
        console.log(a); //30   new value of var
    }
    console.log(a);  // 30 var will keep the last updated value even though it is outside the block
}

printHello();