const LoginPage = require("../pageobjects/login.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    // await LoginPage.open();
    let username = "fishingbooker";
    let pwd = "QAFBTest";
    browser.url(`${username}:${pwd}@https://qahiring.dev.fishingbooker.com/`);
    // await browser.pause(10000);

    // await LoginPage.login("tomsmith", "SuperSecretPassword!");
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //   "You logged into a secure area!"
    // );
  });
});
