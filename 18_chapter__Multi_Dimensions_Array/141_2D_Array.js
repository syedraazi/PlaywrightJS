let accessGrid=[
    [10,20,30],
    [40,50,60],
    [70,80,90],
];

console.log(accessGrid[1][2]); // 60

// Update a value of Grid
let updateGrid=[
    [10,20,30],
    [40,50,60],
    [70,80,90],
];
updateGrid[0][0] = 99;
console.log(updateGrid[0][0]); //99 is new value

// Get the Lenght
let sizeGrid=[
    [10,20,30,20],
    [10,20,30,60],
    [10,20,30,78],
    [40,50,60,34],
    [70,80,90,12]
];
console.log(sizeGrid.length); // Row -> 5

console.log(sizeGrid[0].length); // Columns -> 4