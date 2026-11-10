console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D"); // ABDC

/*
await doesn’t just pause test. It hands control back to the rest of the program, and test continues
later, once the current code has finished. Think of it as: “I’ll wait here,
you carry on with other things, and call me back when you’re free.”
*/