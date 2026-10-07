import { test, expect } from '@playwright/test'

test('Verify login page with invalid user name', async ({ page }) => {

    await page.goto(`https://practicetestautomation.com/practice-test-login/`);


    await page.getByRole('textbox', { name: 'username' }).fill('invalid');

    await page.getByRole('textbox', { name: 'password' }).fill('Password123');

    await page.getByRole('button', { name: 'Submit' }).focus();
    await page.getByRole('button', { name: 'Submit' }).click();

    await page.locator("div#error").isVisible();

    console.log('text' , await page.locator("div#error").textContent())

    await expect(page.locator("div#error")).toHaveText("Your username is invalid!");

})


test('Verify login page with invalid password ', async ({ page }) => {

    await page.goto(`https://practicetestautomation.com/practice-test-login/`);


    await page.getByRole('textbox', { name: 'username' }).fill('student');

    await page.getByRole('textbox', { name: 'password' }).fill('invalid');

    await page.getByRole('button', { name: 'Submit' }).focus();
    await page.getByRole('button', { name: 'Submit' }).click();

    await page.locator("div#error").isVisible();

    console.log('text' , await page.locator("div#error").textContent())

    await expect(page.locator("div#error")).toHaveText("Your password is invalid!");

})




test('verify login page lcator with valid cred', async ({ page }) => {


    await page.goto(`https://practicetestautomation.com/practice-test-login/`);


    await page.getByRole('textbox', { name: 'username' }).fill('student');

    await page.getByRole('textbox', { name: 'password' }).fill('Password123');

    await page.getByRole('button', { name: 'Submit' }).focus();


    await page.getByRole('button', { name: 'Submit' }).click();


    const banner = page.locator('//strong');
    await expect(banner).toBeVisible();
    console.log("text", await banner.textContent())

    await expect(banner).toHaveText("Congratulations student. You successfully logged in!")

    const response = await page.getByText("Log out").isVisible();

    console.log("response", response);

    expect(response).toBe(true);

 //   await page.getByText("Log out").click();
    await page.getByRole('link' , {name : "Log Out"}).click();

    await page.waitForTimeout(5000);
})




