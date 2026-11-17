/*
-A class with a constructor
-The constructor runs automatically when you write new. It sets up the data for that object.
*/

class Student {
    constructor(name, score) {
        this.name = name;     // this = the new object being created
        this.score = score;
    }
}

let amit = new Student("Amit", 80);
let miti = new Student("Miti", 91);

console.log(amit.name);   // Amit
console.log(miti.score); // 91

/*
-Instance methods
-Methods are functions inside the class. You call them on an object, so this is that object.
*/

class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    introduce() {
        console.log("Hi, I am " + this.name);
    }

    hasPassed() {
        return this.score >= 40;
    }
}

let amit = new Student("Amit", 80);
amit.introduce();                // Hi, I am Amit
console.log(amit.hasPassed());   // true