let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(removed);

console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "safari") {
        console.log("Safari doesn't support Automation Now!");
        //break; so o/p will end at "Safari doesn't support Automation Now!"
    }
}