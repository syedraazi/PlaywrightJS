class Car{
    #engine;  //private
constructor(name,engineNAme)
{
    this.name=name;
    this.#engine=engineNAme;
}
    getEngine() {
        return this.#engine;
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}
let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine()); // V8
tesla.setEngine("V9");
console.log(tesla.getEngine()); // V9