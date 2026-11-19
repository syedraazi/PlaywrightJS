# JavaScript + TypeScript Notes

Quick revision notes based on the chapter exercises and Playwright examples in this repository.

## The learning path

```text
values -> operators -> decisions/loops -> arrays/objects
       -> functions -> asynchronous code -> modules
       -> TypeScript -> Playwright tests
```

## 1. Values, variables, and operators

- **Identifiers** are names you choose. Start with a letter (including Unicode letters), `_`, or `$`; names are case-sensitive and cannot be reserved keywords.
- Use `let` when a binding must be reassigned. Use `const` when it should not be reassigned. `var` is function-scoped; `let` and `const` are block-scoped.
- **Hoisting / TDZ:** a hoisted `var` can be read as `undefined` before its assignment. A `let` or `const` binding cannot be accessed before its declaration.
- `const` prevents rebinding, not changing an object's properties.
- **`undefined`** commonly means a value was not assigned; **`null`** is an explicit empty value. One gotcha from the exercises: `typeof null` is `"object"`.
- Strings, numbers, and booleans are common values. Template strings use backticks: `` `Hello, ${name}` ``.
- Arithmetic, assignment, comparison, and logical operators build expressions. Prefer `===` and `!==` when you want comparisons without type coercion.
- `&&` and `||` can short-circuit. `??` uses its right side only for `null` or `undefined`; `||` also uses it for other falsy values such as `0` and `""`.
- `condition ? a : b` is a compact choice between two values. Use `if`/`else` for more involved branching.
- `++` and `--` change a number by one. Prefix form returns the updated value; postfix form returns the previous value.

## 2. Decisions, input, and repetition

```text
condition true? -- yes --> run this branch
              \-- no  --> run the other branch
```

- `if` / `else` handles conditions; nested conditions handle multiple dependent checks.
- `switch` selects a branch by matching a value. Use `break` when you do not want execution to continue into the next case.
- `for`, `while`, and `do...while` repeat work. A `do...while` runs its body at least once.
- `break` exits a loop; use a loop condition to control when repetition ends.
- Nested loops build rows and columns, as in the pattern-printing exercises.
- Input examples use browser `prompt()`, Node.js terminal input, and `prompt-sync`. The input method depends on where the program runs. Another Node.js example reads a file with the filesystem API.

## 3. Strings and arrays

- Strings can be joined, interpolated, searched, and inspected by length or position. The exercises use methods such as `includes()`, `startsWith()`, and `endsWith()`.
- An array is an ordered, zero-indexed collection. `length` counts items; the last index is `length - 1`.
- Arrays can be searched, iterated, copied, sliced, concatenated, sorted, and destructured.
- `map()` transforms items into a new array; `filter()` keeps matching items; `find()` returns the first matching item.
- `reduce()` combines array items into one accumulated result.
- `slice()` selects part of an array without changing the original. `splice()` adds or removes items in the original array.
- Default sorting is lexicographic. For numeric order, give `sort()` a numeric comparator, for example `(a, b) => a - b`.
- A two-dimensional array is an array of arrays. Use two indexes to access a cell, such as `grid[row][column]`.

## 4. Functions and scope

- A function packages reusable work. Inputs are **parameters**; values passed in are **arguments**; `return` sends a result back.
- The exercises use declarations, expressions, arrow functions, nested/returned functions, and IIFEs (functions invoked immediately).
- `...` spreads an array into individual function arguments.
- A **closure** is an inner function that can still use variables from its outer function after that outer function has returned.
- Keep the difference clear: logging a value displays it; returning a value makes it available to the caller.

## 5. Objects and object-oriented code

- Objects group values and functions under properties. Access properties with dot or bracket notation; property names are case-sensitive.
- Objects are reference values. Assigning an object to another variable copies the reference, not an independent object.
- A shallow copy duplicates only the outer object; nested objects can still be shared. The exercises also use `structuredClone()` for a deep copy.
- In the object method examples, `this` is used to access the receiver object's properties.
- A class describes instances; a constructor initializes an instance. Static methods belong to the class itself.
- Encapsulation groups data with the methods that operate on it. The class exercises contrast public and private fields.
- Inheritance lets a subclass reuse or override a parent method. `super` calls the parent implementation.
- The polymorphism exercises show method overriding and runtime behavior: the method that runs depends on the object's class.

## 6. Callbacks, promises, and async/await

```text
start async work -> wait for result -> handle success or error
       callback       Promise          .then() / .catch()
                                      or async / await
```

- A **callback** is a function passed to other code so that code can call it. A callback can run synchronously or asynchronously.
- Deeply nested callbacks make the order of work hard to follow (callback hell).
- A **Promise** represents work that may complete later. `.then()` handles fulfillment, `.catch()` handles rejection, and `.finally()` runs after either outcome.
- `Promise.all()` waits for all promises to fulfill; `Promise.allSettled()` reports every outcome; `Promise.race()` settles with the first promise to settle.
- An `async` function returns a promise. `await` reads the resolved value and makes asynchronous steps easier to write in order.

## 7. Modules

- `export` makes code available from a module; `import` brings it into another file.
- The exercises use named exports, default exports, and aliases for imported names.
- This repository's root `package.json` uses `"type": "module"` for JavaScript ES modules.

## 8. TypeScript

- TypeScript adds type annotations to JavaScript values; the exercises annotate variables, arrays, object shapes, parameters, and return values.
- Common annotations shown: `string`, `number`, `boolean`, `null`, `undefined`, and array types such as `number[]`.
- `any` opts out of useful checking; `unknown` requires the value to be checked before using it.
- `void` is used for a function with no returned value. `never` is used for code that does not finish normally, such as a function that always throws or loops forever.
- Run a lesson from the repository root after installing dependencies:

```sh
npm install
npx ts-node --esm 30_TypeScript/214_TP_1.ts
```

## 9. Playwright test flow

The Playwright examples use a page fixture, browser navigation, locators, actions, and assertions:

```text
test -> page.goto() -> locate element -> fill/click -> expect(...)
```

- `page.goto(url)` opens a page.
- `page.locator(selector)` finds an element; actions in the examples include `.fill()` and `.click()`.
- `expect(...)` checks an observed result, such as the page title.
- The login-page exercise checks the title after entering values and clicking the button; it does not assert that login succeeded.

## Fast recall

| If you need to... | Reach for... |
|---|---|
| Choose one path | `if` / `else`, or `switch` |
| Repeat work | `for`, `while`, or `do...while` |
| Transform or select array items | `map()`, `filter()`, `find()` |
| Reuse logic | a function |
| Keep private state | a class with private fields |
| Wait for asynchronous work | a Promise or `async` / `await` |
| Describe expected value types | TypeScript annotations |
| Automate a browser step | Playwright `page`, locators, and `expect` |

## Interview practice: JavaScript and TypeScript

These are representative interview-style questions about the concepts covered in the exercises, not a verified list from any specific company.

### JavaScript

**1. How do `var`, `let`, and `const` differ?**

`var` is function-scoped. `let` and `const` are block-scoped. `let` can be reassigned; `const` cannot be reassigned, though an object's properties can still be changed.

**2. What is the difference between `==` and `===`?**

`==` may convert types before comparing. `===` compares without type coercion, so it is usually the safer choice when types should match.

**3. How are `null` and `undefined` different? What does `typeof null` return?**

`undefined` often indicates a value was not assigned; `null` is an explicit empty value. `typeof null` returns `"object"` due to a long-standing JavaScript behavior.

**4. What is a closure?**

A closure is a function that retains access to variables from its outer scope, even after the outer function has finished.

**5. When would you use `map()`, `filter()`, `find()`, or `reduce()`?**

Use `map()` to transform every item, `filter()` to keep matching items, `find()` to get the first match, and `reduce()` to accumulate items into one result.

**6. How do `slice()` and `splice()` differ?**

`slice()` returns a selected portion without changing the original array. `splice()` adds or removes items in the original array.

**7. What is the difference between a callback and a Promise?**

A callback is a function passed to other code to be called. A Promise represents the eventual result of asynchronous work and can be handled with methods such as `.then()` and `.catch()`.

**8. What do `Promise.all()`, `Promise.allSettled()`, and `Promise.race()` do?**

`all()` waits for all promises to fulfill, `allSettled()` reports each promise's outcome, and `race()` settles with the first promise to settle.

### TypeScript

**9. What does a TypeScript type annotation do?**

It describes the expected type of a value, parameter, object property, or function return value so the code can be checked against that expectation.

**10. How are `any` and `unknown` different?**

`any` allows values to be used without useful type checking. `unknown` is safer: check or narrow the value's type before using it.

**11. How are `void` and `never` different?**

`void` describes a function that does not return a useful value. `never` describes a function that does not complete normally, such as one that always throws or loops forever.

**12. How would you type a function that accepts a string and returns a string?**

Annotate both the parameter and return type: `function greet(name: string): string { return "Hello, " + name; }`.
