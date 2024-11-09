import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username as {string}', async function (username) {
    await fixture.page.locator("#loginEdit-el").type(username);
});

Given('User enter the password as {string}', async function (password) {
    await fixture.page.locator("#passwordEdit-el").type(password);
    await fixture.page.pause();
})

When('User click on the login button', async function () {
    await fixture.page.locator("#t-comp18-textEl").click();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
    await fixture.page.pause();
});


