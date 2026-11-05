let a = { status: "pass" };
let b = a;  //Copy the reference
b.status = "fail"; //since reference was copied then value will also be updated if we update anything in 'b'
console.log(a.status);
