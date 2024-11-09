import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User enter contact and add contacts', async function () {
    await fixture.page.locator("div.navigation-item-caption-wrapper.ng-tns-c707232077-9").click();
    await fixture.page.locator("crt-button#AddButton>button").click();
    await fixture.page.locator("//div[@class='edit-profile-button required']").click();
    await fixture.page.locator("input[aria-label='First name']").type("TestData123");
    await fixture.page.locator("mat-icon[svgicon='dialog-close']").click();
    await fixture.page.locator("//input[@aria-label='Type']").type("Customer");
    await fixture.page.locator("//mat-option[contains(.,'Customer')]").click();
    await fixture.page.locator("//span[normalize-space(text())='Save']").click();
})