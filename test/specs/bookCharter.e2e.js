const LoginPage = require("../pageobjects/login.page");
const CharterPage = require("../pageobjects/charter.page");
const DetailsPage = require("../pageobjects/details.page");
const PaymentPage = require("../pageobjects/payment.page");
const ConfirmationPage = require("../pageobjects/confirmation.page");

describe("My Login application", () => {
  it("should login with valid credentials", () => {
    // LoginPage.open();
    let username = "fishingbooker";
    let pwd = "QAFBTest";
    browser.url(`https://${username}:${pwd}@qahiring.dev.fishingbooker.com/charters/view/19612`);
    CharterPage.enterCharterCriteria(1);
    CharterPage.bookFirstAvailableDate();
    ///register page
    DetailsPage.continueButton.waitForDisplayed();
    DetailsPage.enterUserDetails("test", "user", "+23456543", "Hellooooooo!")
    //credit card page
    PaymentPage.enterPaymentData();
    //confirmed booking page
    ConfirmationPage.bookingConfirmationHeading.waitForDisplayed();
    ConfirmationPage.saveBookingId();
    ConfirmationPage.createPasswordInput.waitForDisplayed();
    ConfirmationPage.createPasswordInput.setValue("12342342")
    ConfirmationPage.createPasswordButton.click();
  });
});
