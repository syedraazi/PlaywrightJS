const user = {
    name : "Alex",
    printName(){
        return this.name; //this referes to name
    }
}
console.log(user.name); //Alex
