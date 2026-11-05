let a1 = {
    name : "Pramod"
};
console.log(a1); //{ name: 'Pramod' }


let a = { status: "pass" };
console.log(a.status); //pass
console.log(a["status"]); //pass

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]); //pass
console.log(a22.status);
console.log(a22["Status"]); //fail
console.log(a22.Status);
