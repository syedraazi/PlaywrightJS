function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();

/*
Yes, often. A function inside another function is called a nested function.

But it becomes a closure when it uses variables from the outer function’s scope 
and can still access them later—even after the outer function has finished. 
In your example, installBrowser is nested inside startBrowser, and it remembers name.

*/