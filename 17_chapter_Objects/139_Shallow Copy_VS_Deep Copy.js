// 1. Call by reference: one object, two names
let a = { status: "pass" };
let b = a;
b.status = "fail";  //copied by reference so thats why a is also changed
console.log(a.status);            // fail   (a changed too!)


// 2. Shallow copy (...spread): new object, but the inner object is shared
let user1 = { name: "Alex", address: { city: "Example City" } };
let copy1 = { ...user1 }; // using spread
console.log(copy1);    //{ name: 'Alex', address: { city: 'Example City' } }
copy1.name = "Amit";
copy1.address.city = "Mumbai"; //nested key
console.log(user1.name);          // Alex  (safe)
console.log(user1.address.city);  // Example City (changed!)


// 3. Deep copy (structuredClone): everything is new
let user2 = { name: "Alex", address: { city: "Example City" } };
let copy2 = structuredClone(user2);
copy2.name = "Amit";
copy2.address.city = "Mumbai";
console.log(user2.name);          // Alex  (safe)
console.log(user2.address.city);  // Example City   (safe)