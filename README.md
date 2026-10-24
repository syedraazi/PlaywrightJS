# PlaywrightJS

A collection of small JavaScript exercises and examples, organized by chapter. The current lessons cover JavaScript basics, keywords, identifiers, literals, and operators.

## Index

- [01 - JavaScript Basics](#01_chapter_js_basic)
- [02 - Keywords and Identifiers](#02_chapter_js_keywords_identifiers)
- [03 - Literals](#03_chapter_js_literal)
- [04 - Operators](#04_chapter_js_operators)
- [05 - Increment and Decrement Operators](#05_chapter_js_incre_decr_op)
- [06 - If/Else Conditions](#06_chatper_if_else_statement_condition)
- [07 - Switch Statements](#07_chapter_switch)
- [08 - User Input](#08_chapter_userinput)
- [09 - Loops](#09_chapter_loops)
- [Run an example](#run-an-example)

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

### `09_chapter_Loops`

- `62_loops.js` — loop fundamentals.
- `63_For_Loop.js`, `64_For_Loop.js` — repeated `for` loop exercises.
- `65_Interview question.js` through `68_Interview Question.js` — loop interview questions and practice examples.

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
