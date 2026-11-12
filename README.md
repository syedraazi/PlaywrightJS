# PlaywrightJS

A collection of JavaScript exercises and examples, organized by chapter. Lessons cover JavaScript fundamentals, control flow, arrays, functions, strings, objects, classes, modules, asynchronous JavaScript, and Playwright.

## Index

- [01 - JavaScript Basics](#01_chapter_js_basic)
- [02 - Keywords and Identifiers](#02_chapter_js_keywords_identifiers)
- [03 - Literals](#03_chapter_js_literal)
- [04 - Operators](#04_chapter_js_operators)
- [05 - Increment and Decrement Operators](#05_chapter_js_incre_decr_op)
- [06 - If/Else Conditions](#06_chatper_if_else_statement_condition)
- [07 - Switch Statements](#07_chapter_switch)
- [08 - User Input](#08_chapter_userinput)
- [09 - For Loops](#09_chapter_loops)
- [10 - While Loops](#10_chapter_loops_while)
- [11 - Do...While Loops](#11_chapter_loops_dowhile)
- [12 - Arrays](#12_chapters_arrays)
- [13 - Functions](#13_chapter_functions)
- [14 - `var`, `let`, `const`, Hoisting, and TDZ](#14_chapter_var_let_const_hoisting_tdz)
- [15 - Functions and Closures](#15_chapter_functions_closure)
- [16 - Strings](#16_chapter_string)
- [17 - Objects](#17_chapter_objects)
- [18 - Multi-Dimensional Arrays](#18_chapter__multi_dimensions_array)
- [18 - Array Patterns](#18_imp_pattern_array)
- [19 - Callbacks](#19_chapter_callback)
- [20 - Promises](#20_chapter_promise)
- [21 - Async/Await](#21_chatper_async_awaits)
- [22 - Export and Import](#22_export_import)
- [23 - Classes and Objects](#23_class_objects)
- [24 - Playwright](#24_playwright)
- [Self Practice](#self-practise)
- [Run an example](#run-an-example)

## Quick concept guide

Short definitions and examples for the topics in this repository.

### JavaScript Basics

JavaScript runs instructions in order; use `console.log()` to display a value.

```javascript
console.log("Hello, world!");
```

### Keywords and Identifiers

Keywords have a special meaning in JavaScript. Identifiers are names you choose for variables and functions.

```javascript
const userName = "Sam";
```

### Literals

A literal is a value written directly in code, such as a number, string, boolean, or `null`.

```javascript
const answer = 42;
```

### Operators

Operators perform calculations, comparisons, and logical checks.

```javascript
const total = 3 + 4;
```

### Increment and Decrement Operators

`++` increases a number by one; `--` decreases it by one.

```javascript
let count = 0;
count++;
```

### If/Else Conditions

`if` and `else` choose which code to run based on a condition.

```javascript
if (score >= 50) console.log("Pass");
else console.log("Try again");
```

### Switch Statements

`switch` selects a code path by matching a value against different cases.

```javascript
switch (day) {
    case "Monday": console.log("Start"); break;
    default: console.log("Another day");
}
```

### User Input

Input lets a program receive information from a user; the method depends on the environment.

```javascript
const name = prompt("What is your name?");
```

### For Loops

A `for` loop repeats code with an initializer, a condition, and an update.

```javascript
for (let i = 0; i < 3; i++) console.log(i);
```

### While Loops

A `while` loop repeats as long as its condition is true.

```javascript
let i = 0;
while (i < 3) console.log(i++);
```

### Do...While Loops

A `do...while` loop runs its body at least once, then checks the condition.

```javascript
let i = 0;
do { console.log(i++); } while (i < 3);
```

### Arrays

An array stores an ordered collection of values.

```javascript
const colors = ["red", "blue"];
console.log(colors[0]);
```

### Functions

A function is a reusable block of code that can accept inputs and return a result.

```javascript
function add(a, b) { return a + b; }
```

### `var`, `let`, `const`, Hoisting, and TDZ

`let` and `const` are block-scoped declarations; a `const` binding cannot be reassigned. The temporal dead zone (TDZ) is the time before a `let` or `const` declaration where it cannot be accessed.

```javascript
const language = "JavaScript";
let version = 2026;
```

### Functions and Closures

A closure is a function that retains access to variables from its outer scope.

```javascript
function makeCounter() {
    let count = 0;
    return () => ++count;
}
```

### Strings

A string is text; template literals use backticks to interpolate values.

```javascript
const greeting = `Hello, ${name}!`;
```

### Objects

An object groups related values under named properties.

```javascript
const user = { name: "Sam", active: true };
```

### Multi-Dimensional Arrays

A multi-dimensional array contains arrays, often used to represent rows and columns.

```javascript
const grid = [[1, 2], [3, 4]];
console.log(grid[1][0]);
```

### Array Patterns

Pattern exercises use loops and repetition to print shapes made from characters.

```javascript
for (let row = 1; row <= 3; row++) console.log("*".repeat(row));
```

### Callbacks

A callback is a function passed to another function so it can be called at an appropriate time.

```javascript
setTimeout(() => console.log("Done"), 1000);
```

### Promises

A promise represents the eventual success or failure of an asynchronous operation. Use `.then()` for success and `.catch()` for failure.

```javascript
Promise.resolve("Ready")
    .then(value => console.log(value))
    .catch(error => console.error(error));
```

### Async/Await

`async` and `await` provide a readable way to work with promises and asynchronous tasks.

```javascript
async function getValue() {
    return await Promise.resolve("Ready");
}
```

### Self Practice

Practice combines concepts by applying them to small problems; `map()` is one way to transform each array item.

```javascript
const doubled = [1, 2, 3].map(number => number * 2);
```

## Chapters

### `01_chapter_JS_Basic`

- `01_HelloWorld.js` — print a greeting.
- `02_Math.js` — perform basic arithmetic and print the results.

### `02_chapter_JS_Keywords_Identifiers`

- `03_JS_Engine.js` and `04_let_engine.js` — introductory variable examples.
- `05_KW_ID.js` — JavaScript keywords and identifier examples.
- `06_KW_ID_rules1.js` and `07_Identifiers_rules2.js` — identifier naming rules and conventions.
- `08_Comments.js` — single-line and multi-line comments.
- `09_InterviewQues.js` — valid and invalid identifier examples, including case sensitivity and Unicode identifiers.

### `03_chapter_JS_Literal`

- `10_Literals.js` and `15_Literals_2.js` — introductory literal examples.
- `11_Number_Literal.js` and `16_Numbers.js` — numeric literal concepts and output.
- `17_Numbers_2.js` — additional number-literal examples.
- `12_Undefined.js` and `13_Null_Undefined.js` — undefined and null behavior.
- `14_Nulls.js` — explicit null examples.
- `18_Special_Literals.js` — special literal and edge-case examples.

### `04_chapter_JS_Operators`

- `19_Arith_Opt.js`, `20_Assignment_Opt.js`, `21_Arithmatic_Opt.js` — arithmetic and assignment practice.
- `22_Comparison_Opt.js` — comparison operators and output checks.
- `23_Logical_Opt.js` — logical operators and boolean evaluation.
- `24_Confusing_Comparison_Opt.js` — JavaScript comparison edge cases.
- `25_Interview_Question_1.js`, `26_String.js`, `27_Ternary_Op.js`, `28_Ternary_Op_2.js`, `29_Interview_Question_2.js` — string and ternary examples.
- `33_Nested_Ternary.js` and `36_TypeOf.js` — nested ternary and type-checking exercises.

### `05_chapter_JS_Incre_Decr_Op`

- `37_ID_Op.js`, `38_ID.js` — increment/decrement and identifier operations.
- `39_Interview Question.js` through `44_Nullish.js` — interview-style exercises covering operators, edge cases, and nullish handling.

### `06_chatper_if_else_statement_Condition`

- `45_if.js` — basic if statements.
- `46_Nested_if_else.js` — nested conditionals.
- `47_TernaryOP_IfElse.js` — ternary examples inside conditional logic.
- `48_Imp_Multiple_IfElse.js` — multiple condition checks and practical branching.

### `07_chapter_switch`

- `49_switch.js` — basic switch statement examples.
- `50_interview Question.js` through `57_Interview Questions.js` — switch-based interview and practice questions.

### `08_chapter_UserInput`

- `58_UI.js` — browser-style user input example.
- `59_node_UI.js` — Node.js user input practice.
- `60_Prompt_Sync_User_Input.js` — prompt-sync example for terminal input.
- `61_FS_Readfile.js` — file read example using the Node.js filesystem API.

### `09_chapter_Loops` — For loops

- `62_loops.js` — loop fundamentals.
- `63_For_Loop.js`, `64_For_Loop.js` — repeated `for` loop exercises.
- `65_Interview question.js` through `68_Interview Question.js` — loop interview questions and practice examples.

### `10_chapter_Loops_WHILE` — While loops

- `69_While_Loop.js` and `71_While.js` — while loop examples.
- `70_Interview question.js` — while loop practice question.
- `72_break.js` — using `break` to exit a loop.

### `11_chapter_Loops_DoWhile` — Do...while loops

- `73_do_while_loop.js` — do...while loop fundamentals.
- `74_Interview Question.js` and `76_Interview question.js` — practice questions.
- `75_Nested.js` — nested do...while loop example.

### `12_chapters_Arrays`

- `77_Arrays.js` through `80_TypesOfArrays.js` — array creation, indexing, length, and value types.
- `81_Create_Array.js`, `82_Access_Modiy.js`, `83_Add_Remove_Splice.js`, and `84_Arrays.js` — creating and modifying arrays.
- `85_Searching.js` and `86_find.js` — searching arrays with index and find methods.
- `87_Iterates.js` and `88_Maps_Filters_Array_Transform.js` — iterating and transforming arrays.
- `89_Sorting.js`, `90_Lexicographic Sort_Sorting.js`, `90_Lexicographic_Explain.md`, and `91_Normal_Sorting.js` — array sorting, including lexicographic and numeric order.
- `92_Array_slicing.js` and `93_Slicing Explained.md` — slicing arrays.
- `94_Array_Concat.js` through `99_Last type of array.js` — concatenation, checking, transforming, copying, and destructuring arrays.
- `100_Swap.js` — swapping array values.

### `13_chapter_Functions`

- `101_Functions.js` through `105_Type4_Function.js` — function basics and function types.
- `106_IMP_TemplateLiteral.js` — template literals in functions.
- `107_Expression_Function.js` through `112_Real_Function.js` — function expressions, arrow functions, and practical examples.
- `113_Spread_as_Arg_Function.js` — passing spread arguments to a function.
- `115_Function_Return_Nested.js` and `116_Return_Fn.js` — nested and returned functions.
- `ImmediatelyInvokedFunctionExpression_IIFE.js` — immediately invoked function expressions (IIFEs).

### `14_chapter_Var_Let_Const_Hoisting_TDZ`

- `117_var_let_const.js` through `120_const.js` — declarations with `var`, `let`, and `const`.
- `121_Var_hoisting.js` through `123_Function_hoisting.js` — variable and function hoisting.
- `124_VAR_TDZ`, `125_Let_TDZ`, and `126_Var.js` — declaration behavior and the temporal dead zone (TDZ).
- `127_TDZ_TypeOf.js` — `typeof` with undeclared names and `let` bindings in the TDZ.

### `15_chapter_Functions_Closure`

- `128_Closure.js` — a nested function that retains access to its outer function's variables.
- `Closure.md` — notes distinguishing nested functions from closures.

### `16_chapter_String`

- `129_String_MultiLine.js` — template literals, interpolation, multiline strings, and string conversion.
- `130_String_Function.js` — string length, indexing, `at()`, `charAt()`, and character codes.
- `131_String_Search(Includes).js` — searching strings with `includes()`, `startsWith()`, `endsWith()`, and index methods.

### `17_chapter_Objects`

- `132_Objects.js` — object creation, property access, and case-sensitive keys.
- `133_Object_CopyByReference.js` and `138_CallByRef_VS_CallByValue.js` — primitive values and object references.
- `134_Real_Example.js` — a nested sample user object with methods.
- `135_Object_Function.js` — a method that accesses its object's properties with `this`.
- `136_Normal_Object.js` and `137_Config.js` — object examples and adding, updating, and deleting properties.
- `139_Shallow Copy_VS_Deep Copy.js` — reference copies, spread-based shallow copies, and `structuredClone()`.

### `18_chapter__Multi_Dimensions_Array`

- `140_1D_Arrays.js` — a one-dimensional array.
- `141_2D_Array.js` — accessing, updating, and measuring a two-dimensional array.
- `142_REAL_Exmaple.js` — iterating through a matrix of test results.
- `143_Array_function.js` — calculating row totals with `map()` and `reduce()`.

### `18_IMP_Pattern_Array`

- `144_Right_Hand_Patter.js` — printing an increasing left-aligned triangle pattern.
- `145_Left_Hand_Pattern_Or_Reverse.js` — printing an inverted triangle with two loop approaches.
- `146_Pyramid_Pattern.js` — printing pyramid and diagonal patterns.

### `19_chapter_Callback`

- `147_Callback.js` — basic callback examples using named, anonymous, and arrow functions.
- `147_Callback_Explanation.md` — beginner-friendly notes explaining callbacks, callback hell, and practical examples for future reference.
- `147_Callback_Explanation.docx` — Word version of the same callback explanation.
- `148_MoreExample_Callbacks.js` — extra callback examples and test-case-style callbacks.
- `149_Callback_Sync.js` — synchronous callback behavior with `forEach()`.
- `150_Callback_Async.js` — asynchronous callback behavior using `setTimeout()`.
- `151_Callback_Hell.js` — nested callback flow using delayed step functions.
- `152_Real_QA_CallBack_Code.js` — real-world QA automation flow using callbacks.
- `153_Callback_Return.js` — callback examples with return values and function chaining ideas.
- `154_Pyramid_DOOM.js` — nested callback pattern also known as the Pyramid of Doom.
- `CallBack_RealQA_Example.txt` — plain text notes explaining a login-flow callback scenario.

### `20_chapter_Promise`

- `155_Promise.js` — creating promises and handling resolved and rejected results.
- `156_Promise_Finally.js` — using `.finally()` for work that runs after either outcome.
- `157_Promise_ImprovedVer.js` — chaining promises to model sequential QA login steps.
- `158_Promise_ALL.js` — running promises together with `Promise.all()`.
- `159_Promise_Settle.js` — collecting every outcome with `Promise.allSettled()`.
- `160_Promise_Race.js` — using `Promise.race()` to observe the first settled promise.
- `161_InterviewQuestion.js` — practice with promise resolution, chaining, rejection, and cleanup.

### `21_chatper_Async_Awaits`

- `162_Async_Await.js` — notes on async functions, promises, and `await`.

### `22_Export_Import`

- `172_IE.js` and `173_IE.js` — named imports, including renaming imported exports.
- `174_logs.js` and `Logs/logger.js` — default and named exports for logging functions.
- `utils.js` and `testutils.js` — example utility modules and named exports.
- `Interview Question.js` — import alias practice.

The root `package.json` sets `"type": "module"`, so these examples use ES module `import` and `export` syntax.

### `23_Class_Objects`

- `175_Class.js` — class declarations, private fields, methods, and creating instances.

### `24_Playwright`

- `tests/example.spec.ts` — starter browser tests that check the Playwright site title and its getting-started link.
- `playwright.config.ts` — Playwright Test configuration for Chromium, Firefox, and WebKit.

This chapter is a separate npm project with its own `package.json`.

### `Self Practise`

- `01_Maps_fn.js` — practice transforming arrays with `map()`.

## Run an example

Install [Node.js](https://nodejs.org/) if it is not already available, then run a lesson from the repository root:

```sh
node 01_chapter_JS_Basic/01_HelloWorld.js
```

Each file is an independent example and can be run the same way by replacing the path with another `.js` file.

### Running files that ask for user input

Some examples use `prompt()` or `prompt-sync` to read values from the terminal. Run them in the VS Code integrated terminal.

```sh
node 08_chapter_UserInput/60_Prompt_Sync_User_Input.js
```

You can also pass a value directly:

```sh
node 08_chapter_UserInput/60_Prompt_Sync_User_Input.js 10
```

Files like `58_UI.js` are browser-oriented examples and will not work in a Node.js terminal without a browser environment.

### Run the Playwright tests

From the repository root, install the Playwright project dependencies and browser binaries, then run its tests:

```sh
cd 24_Playwright
npm install
npx playwright install
npx playwright test
```
