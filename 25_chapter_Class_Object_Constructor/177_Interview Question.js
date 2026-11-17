class Car{
    // Constructor
    // Default vs Param

    constructor(assign_name)
    {
        this.name=assign_name;
    }
}

let hyundai=new Car("i10");
console.log(hyundai.name);

let mg_hector = new Car("MG Hector");
console.log(mg_hector.name);

const i11 = new Car("i11");     // constructor runs → "i10"
const Nexon = new Car("Nexon");
