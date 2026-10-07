import {test , expect } from "@playwright/test";

test('verify radio and checkbox', async ({page}) => {

    await page.goto(`https://practicetestautomation.com/practice-test-table/`);

    await page.getByRole('radio' , {name : "java"} ).click();

    await page.getByRole('checkbox' , {name : "Beginner"} ).click();

    await page.getByRole('checkbox' , {name : "Advanced"} ).click();

    const selectDropdown = page.getByRole('combobox' , {name : "Sort by:"} );

    await selectDropdown.selectOption('Enrollments');

    await page.waitForTimeout(5000);
    await page.locator("[id = 'sortBy']").selectOption("Level");

    
    await page.locator('tr:has(td[data-col="course"]:has-text("REST Assured")) td[data-col="link"] a').click();

    await page.waitForTimeout(5000);

});
