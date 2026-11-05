let apiCall = new Promise(function(resolve,reject){
           resolve({status : 200, body : "User Data"});
});

// When we only take success case
apiCall.then(function(response){
    console.log(response);
});

// when it can be success or failure
let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
});
