let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];


for (let i=0;i<testMatrix.length;i++)   // loop through the rows of the matrix
    {
for (let j=0;j<testMatrix[i].length;j++)  // loop through the column and each row('testMatrix[i].length')
{
   process.stdout.write(testMatrix[i][j]+" ");  // print earch row and column value with space
    }
    console.log(""); // new line
    }

    console.log(" --------- ");