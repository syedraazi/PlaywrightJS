// Multiple it by 3
let nums = [1, 2, 3, 4, 5];
let mul=nums.map(n=>n*3);
console.log(mul);//[ 3, 6, 9, 12, 15 ]

//Make it Upper Case
let names = ["asha", "ben", "chen"];
let upperName=names.map(nm=> nm.toUpperCase(names));
console.log(upperName);//[ 'ASHA', 'BEN', 'CHEN' ]

//Square of num
let squareNums = [1, 2, 3, 4, 5];
let sq=squareNums.map(n=>n*n);
console.log(sq); //[ 1, 4, 9, 16, 25 ]


//count the lenght of each array
let nm = ["asha", "ben", "chen"];
let c=nm.map(n=>n.length);
console.log(c); //[ 4, 3, 4 ]
