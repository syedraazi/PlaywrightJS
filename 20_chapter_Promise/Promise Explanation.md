Analogy: you order a package online. The store gives you a promise that it will either arrive (success) or fail (lost or cancelled). You don’t stand and wait. You say what to do in each case: if it arrives, open it (then), if it fails, file a complaint (catch), and either way, close the tracking page (finally).



---------------------------------Step by step------------------------

Step 1: Create the promise

let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200});
    reject("error");
});

apiCall.then(function(data){
    console.log(data);   // if success then { status: 200 } as o/p
}).catch(function(error){
    console.log(error); // if failed then error as o/p
}).finally(function(){
    console.log("I will be executed anyhow!!");  // Always Executed!
});

-A Promise is an object that represents a result that will arrive later.
-It gets two functions: resolve (call it for success) and reject (call it for failure).
-Your code calls reject("error"), so this promise fails with the value "error".
-Or your calls line resolve({ status: 200 }) is the success.

--> 'then' only runs when the promise resolves.
--> 'catch' runs when the promise rejects.
--> 'finally' runs whether the promise succeeded or failed. It’s used for cleanup, like closing a connection.

---------------------->> Real QA Example  <<------------------------

Step by step: your checkApi example
javascript
async function checkApi() {
    try {
        const response = await fetch("https://example.com/api/users");
        console.log(response.status);
    } catch (error) {
        console.log("API failed:", error);
    } finally {
        console.log("Done");
    }
}

checkApi();   // <- you must call it, or nothing happens
Step	What happens
1	async in front of function says “this function uses await inside”.
2	fetch(...) sends the request and returns a promise (the same kind you just learned).
3	await pauses the function until the promise finishes, then gives you the real response.
4	console.log(response.status) prints the status code, like 200.
5	If the request itself fails (no internet, wrong server), it jumps to catch.
6	finally always runs and prints Done.

How it maps to what you just learned:

Promise style	               async/await style
.then(data => ...)	           the line after await
.catch(error => ...)	       catch (error) { ... }
.finally(() => ...)	           finally { ... }



