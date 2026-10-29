// Function as Expression

function fun(name)
{
    return `hello, ${name}`;
}

// // Anonymous Fn - Fn without name.

const greet= function (name){
    return `hello, ${name}`; 
}
console.log (fun("SRS"));
console.log(greet("HS"));