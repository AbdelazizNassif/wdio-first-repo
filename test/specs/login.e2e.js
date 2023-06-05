const { assert } = require("chai");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
import loginData from '../testData/loginData.js'


describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login(loginData.userName, loginData.password);
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining("You logged into a secure area!");
    await expect(browser).toHaveUrl("secure", {containing: true});
    await expect(browser).toHaveTitle("The Internet");
  });
});
