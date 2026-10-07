import {test, expect} from '@playwright/test'

test('verify home page title' , async ({page}) => {
    await page.goto("https://demoblaze.com/");
    const title = await page.title();

// Checked instantly in memory; no retries
expect(title).toBe('ASTORE');

})