                       <----- The async template ----->

async function myFunction() {
    let result = await somethingSlow();
    console.log(result);
}
myFunction();

Only three things change each time: the function name, the slow thing, and what you do with the result. Everything else stays.

Remember it in 3 words =====>>>>

async → await → call it

->Write async before function.
->Write await before the slow thing.
->Call the function at the bottom (the step people forget).


WE NEVER HAVE TO WRITE THIS =====>

=====>>>>>>>  return new Promise(function (resolve) { ... })    <=======


Eg -->

test("login", async ({ page }) => {
    await page.goto("https://example.com");
    await page.click("#login");
});
