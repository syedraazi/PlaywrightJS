class Father{
    eat()
    {
        console.log("Eating");
    }
}
class Son extends Father{
    sleep()
    {
        console.log("Sleeping");
    }
}
let s=new Son();
let f=new Father();
// son class extends father's class so he can access both methods
s.eat(); //Eating
s.sleep(); //Sleeping
f.eat(); //Eating
//f.sleep();// TypeError: f.sleep is not a function