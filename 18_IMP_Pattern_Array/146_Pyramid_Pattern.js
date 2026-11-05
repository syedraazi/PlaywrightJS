// const data = require('fs').readFileSync(0, 'utf8');
// const n = parseInt(data.trim(), 10);
// Write your solution here
let n = 4;
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n - 1 - i; j++) {   // spaces
        process.stdout.write(" ");
    }

    for (let j = 0; j < 2 * i + 1; j++) {   // stars
        process.stdout.write("*");
    }

    console.log("");
}


//////////////////////Pattern////////////////////////

/*

   *
  *
 *
*

*/

let size = 4;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
        process.stdout.write(" ");  // this will prnt space and once loop breaks
    }
console.log("*"); //  then this will print the pattern
}
