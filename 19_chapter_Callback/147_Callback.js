
////    A function you pass into another function to be called later is a callback. ///
 
/*    Analogy: you order at a restaurant and leave your phone number. 
                The kitchen prepares the food, then calls you. 
                Your number is the callback: you hand it over now, and it gets used later.
 */

function placeOrder(item,callback){
    console.log("Placing");
    console.log("Order Placed",item);
    callback();
}
console.log("-------------------");
//1st Way
function completeOrder(){
    console.log("This is Normal Function- Order Placed");
}
placeOrder("Pizza",completeOrder);

console.log("-------------------");
//2nd Way
placeOrder("Burger",function()
{
    console.log("This is Anonymous function- Order Ready");
});

console.log("-------------------");
//3rd Way
placeOrder("Sandwhich",() => {
    console.log("This is Arrow function- Order Placed");
});
console.log("-------------------");


// test('has title', async ({ page }) => {
// });

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });
