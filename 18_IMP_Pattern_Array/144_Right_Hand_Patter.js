// to  get from user input
// const data = require('fs').readFileSync(0, 'utf8');
// const n = parseInt(data.trim(), 10);
// Write your solution here

                                    /*  Pattern

*
**
***
****
*/


let n=4;
for (let i = 0; i < n; i++)  // loop the rows from (0,0) to (2,2)
{
    for (let j = 0; j <= i; j++) // loop the column from (0,0 to 2,2)
    {
        process.stdout.write("*");  // this will print the output in 1 line as console.log print the output in next line
    }
    console.log(""); // this will print o/p or spaced in the next line
}
