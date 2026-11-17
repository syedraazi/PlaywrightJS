class Cred{
    #apikey;   // private and only Constructor can use it
    constructor(user,key)
    {
        this.user= user; // public
        this.#apikey=key; // private so constructor can only use it
    }
    getApi()
    {
        return this.#apikey;
    }
}
let c= new Cred("Admi","#agsdjakdhakd");
console.log(c.user);
//console.log(c.#apikey); //Error: Property '#apikey' is not accessible outside class 'Cred' because it has a private identifier.