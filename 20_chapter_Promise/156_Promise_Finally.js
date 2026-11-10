/*
-It is like try- catch block.
-Pass condition in 'then',fail in 'catch'
-'Finally' will always execute
*/


let apiCall = new Promise(function(resolve,reject){
    resolve({ status: 200});
    reject("error");

})


apiCall.then(function(data){
    console.log(data);   // if success then { status: 200 } as o/p
}).catch(function(error){
    console.log(error); // if failed then error as o/p
}).finally(function(){
    // Always Executed!
     console.log("I will be executed anyhow!!");
});