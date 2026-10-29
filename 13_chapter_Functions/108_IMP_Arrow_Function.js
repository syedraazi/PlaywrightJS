function fun(name)
{
    return `hello, ${name}`;
}
console.log(fun("SRS"));
// Arrow Function //
/* Remove the keyword function, remove the keyword return, 
   remove the curly braces, and use the =>
*/
const greet = (names) => `hello, ${names}`;
console.log(greet("SRS"));