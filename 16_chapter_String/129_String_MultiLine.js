let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms and URL is ${url} and Status is ${status}`;
console.log(message);


// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);


// Multiline String
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
console.log(report);

console.log(String(200));
console.log(String(true)); //  "true"
console.log(String(null)); // "null"
console.log(String([1, 2])); // "[1,2]"