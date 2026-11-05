const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Adding/modifying properties
user.city = "NYC";
user.age = 31;
user.sex='M';

console.log(user);