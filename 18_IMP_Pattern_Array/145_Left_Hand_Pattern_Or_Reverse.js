/* Pattern

***
**
*

*/

let n = 3;
for(let i=n;i>=1;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");
}


/// OR as this will work like the righ-hand pattern as it will take rows,columns concept///

let size = 3;
for (let i = 0; i < size; i++) {          // i = row number (0 to 2)
    for (let j = 0; j < size - i; j++) {  // size - i stars in this row
        process.stdout.write("*");
    }
    console.log("");
}
