class Student {
    static collegeName = "PW AT Batch";
    static mentorName = "prrammoddutta";


    constructor(name,score) {
        this.name = name;
        this.score = score;
    }
    static display() {
        console.log(this.name + " are part of the ", Student.collegeName + this.score)
    }
    nsf(){
        console.log(this.name);
    }
}
let amit = new Student("amit",80);
let miti_jha = new Student("miti_jha",91);
let sumu = new Student("sumu",87);
let padmini = new Student("padmini",99);
console.log(Student.collegeName);
console.log(amit.name);
console.log(miti_jha.name);

//------------------------------------------OR----------------------------------------//

class Student {
    static collegeName = "PW AT Batch";
    static mentorName = "SRS";

    constructor(name,score) {
        this.name = name;
        this.score = score;
    }
    //static 
    display() {
        console.log(`student ${this.name}` + " is part of the ", Student.collegeName +' and score is ' + this.score)
    }
    nsf(){
        console.log(this.name);
    }
}
let amit = new Student("amit",80);
let miti_jha = new Student("miti_jha",91);
let sumu = new Student("sumu",87);
let padmini = new Student("padmini",99);
console.log(Student.collegeName);
console.log(amit.name);
console.log(miti_jha.name);
//console.log(Student.display());
amit.display();
miti_jha.display();
