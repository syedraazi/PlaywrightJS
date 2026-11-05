// (Nested Callbacks) or Pyramid of DOOM

/* 1. What is a callback?
 callback is simply a function passed as an argument to another function, 
 so that the receiving function can call it.   */


function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Click button");
    callback();
}

function step4(callback) {
    console.log("Click button");
    callback();
}
//Using Normal function
// step1(function () {
//     step2(function () {
//         step3(function () {
//             step4(function () {
//                 console.log("Done!");
//             });
//         });
//     });
// });

// Using Arrow function
step1(() =>{
    step2(() =>{
        step3(() => {
            step4(() => {
                console.log("Done!");
            });
        });
    });
});
/* ---------------Explanation------------------
The key idea is:
- step1() executes first.
- Inside its callback, step2() is called.
- Inside step2()'s callback, step3() is called.
- Inside step3()'s callback, step4() is called.
- Finally, "Done!" is printed.

Why this order?
-> Because each function calls its callback only after executing its own console.log().
-> In this code, callbacks are Sync,so everything executes immediately in the shown order.

-> As more steps are added, the code becomes harder to read and maintain.

This structure is often called:
- Callback Hell
- Pyramid of Doom
- Nested Callbacks

-> The idea is that each step runs after the previous step invokes its callback.
*/

//Simple CallBack Example
function greet(callback) {
    console.log("Hello");
    callback();
}

greet(() =>{
    console.log("Welcome!");
});