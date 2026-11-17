class API{
    constructor(baseURL)
    {
        this.baseURL=baseURL;
    }
    srs(path)
    {
        return this.baseURL+path;
    }
}

let staging = new API("https://staging.api.com");
let prod = new API("https://prod.api.com");
console.log(staging.srs("/stage/users"));
console.log(prod.srs("/prod/users"));