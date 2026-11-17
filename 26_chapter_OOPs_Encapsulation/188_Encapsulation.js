class Person{
    // private or hide the variable
    #child1;
    #child2;
    constructor(name, child1, child2)
    {
this.name=name;
this.#child1=child1;
this.#child2=child2;
    }
    getChild() //getter; just like mother
    {
        return this.#child1;
    }
    setChild(changed_name) //setter; just like wife
    {
        this.#child1=changed_name;
    }
}
let p= new Person("Pra","Vra","Sra");
console.log(p.getChild());
p.setChild("Anmol");
console.log(p.getChild());

console.log(p.name);
 p.name = "Amit";

/* O/P -> 
Vra
Anmol
Pra
*/