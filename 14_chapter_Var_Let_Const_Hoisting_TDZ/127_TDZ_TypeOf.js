console.log(typeof missingName); // "undefined" for an undeclared name

{
    try {
        console.log(typeof tdzName);
    } catch (error) {
        console.log(error.name); // ReferenceError: typeof does not bypass the TDZ
    }

    let tdzName = "initialized";
    console.log(typeof tdzName); // "string"
}