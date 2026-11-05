# Callback in JavaScript

A callback is a function that you pass into another function and that function calls later.

In simple words:

- You give a function as an argument
- Another function receives it
- That function runs it at the right time

This is very useful in JavaScript, especially for events, async tasks, loops, and automation testing.

---

## Real-world analogy

Imagine you order food at a restaurant.

- You give the waiter your order
- The kitchen prepares it
- Then the waiter calls you back when it is ready

Here:

- the order is the task
- the phone number is the callback
- the kitchen is the function that runs later

So a callback is like: "Do this work, and when you are done, call this function."

---

## Basic callback example

```javascript
function placeOrder(item, callback) {
    console.log("Placing");
    console.log("Order Placed", item);
    callback();
}
```

### Explanation

- `item` is the product like "Pizza" or "Burger"
- `callback` is the function passed into `placeOrder`
- `callback()` runs at the end

### Example 1: Named function

```javascript
function completeOrder() {
    console.log("Normal fn");
}

placeOrder("Pizza", completeOrder);
```

Output:

```javascript
Placing
Order Placed Pizza
Normal fn
```

Important:

```javascript
placeOrder("Pizza", completeOrder);
```

This is correct because we pass the function itself, not its result.

But this is wrong:

```javascript
placeOrder("Pizza", completeOrder());
```

Because `completeOrder()` runs immediately, and then `callback()` will try to call the result, which is not a function.

---

## Example 2: Anonymous function

```javascript
placeOrder("Burger", function () {
    console.log("Order Ready");
});
```

Output:

```javascript
Placing
Order Placed Burger
Order Ready
```

This is useful when the function is used only once and does not need a name.

---

## Example 3: Arrow function

```javascript
placeOrder("Burger", () => {
    console.log("Arrow function");
});
```

Output:

```javascript
Placing
Order Placed Burger
Arrow function
```

This is the modern short version of an anonymous function.

---

## Full output of all examples

```javascript
Placing
Order Placed Pizza
Normal fn
Placing
Order Placed Burger
Order Ready
Placing
Order Placed Burger
Arrow function
```

All 3 ways work the same. The difference is only in how the function is written.

---

## Summary table

| Way | How you pass it | Example |
|------|-----------------|---------|
| 1st | Named function | `completeOrder` |
| 2nd | Anonymous function | `function () { ... }` |
| 3rd | Arrow function | `() => { ... }` |

Use:

- named functions when you want to reuse them
- arrow functions for quick one-time callbacks
- anonymous functions when the function is only used once

---

## Callback in test cases

```javascript
function test(item, callMeWhenDone) {
    console.log("Hi start the Testcase", item);
    callMeWhenDone();
}

test("Verify the login page is working", async (page) => {
    // code here
});
```

This is a callback pattern:

- `test()` receives a function
- it calls it later when the work is done

This is also the same idea behind:

```javascript
forEach(function (value) {
    console.log(value);
});
```

and

```javascript
setTimeout(function () {
    console.log("After 5 seconds");
}, 5000);
```

---

## Synchronous callback example

```javascript
let testResults = ["Pass", "Fail", "Pass", "Skip"];

testResults.forEach(function (result, index) {
    console.log("Test", index, result);
});
```

This prints all results in order. The callback runs for each item in the array.

Important note:

- `forEach` is synchronous
- it finishes all iterations before moving on

---

## Async callback example

```javascript
console.log("Test 1 : Started!");

setTimeout(function () {
    console.log("Test 2 : Started!");
}, 5000);

console.log("Test 3 : Started!");
```

Output order:

```javascript
Test 1 : Started!
Test 3 : Started!
Test 2 : Started!
```

Why?

- `setTimeout` is asynchronous
- JavaScript does not wait for 5 seconds before continuing
- the callback runs later, after the delay ends

---

## Callback Hell

Callback hell happens when many functions are nested inside one another.

```javascript
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test is Complete!");
            });
        });
    });
});
```

This is hard to read and maintain.

### Why it is called "callback hell"

Because the code becomes:

- deeply nested
- difficult to understand
- hard to debug
- messy for future maintenance

This is one of the reasons developers later used `Promises` and `async/await`.

---

## Pyramid of Doom / Nested Callback Pattern

This is another name for callback hell. The code starts to look like a pyramid because each function calls another function inside it.

```javascript
function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Click button");
    callback();
}

function step4(callback) {
    console.log("Click button");
    callback();
}

step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("Done!");
            });
        });
    });
});
```

### Why this happens

- `step1` runs first
- inside its callback, `step2` runs
- inside `step2`, `step3` runs
- inside `step3`, `step4` runs
- finally, "Done!" prints

### Important idea

The callback order is based on the sequence of execution. Each step waits for the previous step to finish before moving to the next callback.

This structure is usually called:

- callback hell
- nested callbacks
- pyramid of doom

It becomes harder to read as more steps are added.

---

## Real QA scenario example

```javascript
function openBrowser(callback) {
    console.log("opening the browser");
    setTimeout(function () {
        console.log("Step 1 - browser starting...");
        callback();
    }, 500);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 500);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    }, 500);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 500);
}

openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test is Complete!");
            });
        });
    });
});
```

This models a real E2E flow:

1. open browser
2. load login page
3. enter credentials
4. click login
5. finish the test

---

## Quick interview-style definition

> A callback is a function passed into another function and executed later when that function finishes its task.

---

## Final takeaway

Callbacks are one of the core ideas in JavaScript.

They are used for:

- event handling
- async operations
- array methods like `forEach`, `map`, `filter`
- browser and automation flows
- test frameworks

The key idea is simple:

> "Do a task, and when it is finished, call this function."

This is the basic concept behind many modern JavaScript patterns.
