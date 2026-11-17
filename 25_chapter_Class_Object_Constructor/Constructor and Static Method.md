Constructor

What it is: a special method named constructor that runs once, automatically, when you create an object with new.

Its job: set up the object’s starting data. Every object gets its own copy of that data.

javascript
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

let amit = new Student("Amit", 80);
let sara = new Student("Sara", 91);

Without a constructor, you would have to create each object and set its values by hand:

javascript
let amit = {};
amit.name = "Amit";
amit.score = 80;
// ...repeat for every student

The constructor does that in one line for each object.

Where you use it:

Giving every object its own values, like a student’s name or a user’s email.
Setting default values, like role = "tester".
Doing setup work when the object is created, like opening a connection or storing a page.

In Playwright, the constructor is how a page object receives the browser page:

javascript
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
    }
}


=====================================================================================

Static method

What it is: a method marked static. It belongs to the class itself, not to the objects made from it. You call it on the class name, and you cannot call it on an object.

javascript
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

MathHelper.add(2, 3);        // 5, called on the class
// new MathHelper().add(2,3) // error: add is not a function

Its job: hold logic or data that does not depend on any one object. You don’t need to create an object first, because there is nothing object-specific to store.

Where you use it:

Helper or utility functions, such as formatting a date or generating random test data:
javascript
class TestData {
    static randomEmail() {
        return "user" + Date.now() + "@test.com";
    }
}
let email = TestData.randomEmail();
Shared data for the whole class, like static collegeName, which is the same for every student.