import { test, expect } from '@playwright/test'

test('Login Page Test ', async ({page})=>{
await page.goto('https://app.wingify.com/#/login');
  await page.locator('#login-username').fill('abc');
  await page.locator('#login-password').fill('abc1');
  await page.locator('#js-login-btn').click();
  await expect(page).toHaveTitle("Login - Wingify");
});

// to run the playwright script
// File should be in Test Folder
// File name should end with -> '<Filename>.spec.js'
// Command in terminal -> 'npx playwright test tests/LoginPage.spec.js --headed'