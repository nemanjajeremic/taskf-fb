const LoginPage = require("../pageobjects/login.page");
const CharterPage = require("../pageobjects/charter.page");
const DetailsPage = require("../pageobjects/details.page");
const PaymentPage = require("../pageobjects/payment.page");
const ConfirmationPage = require("../pageobjects/confirmation.page");

describe("My Login application", () => {
  it("Verify that user can access specific charter", () => {
    let username = "fishingbooker";
    let pwd = "QAFBTest";
    browser.url(`https://${username}:${pwd}@qahiring.dev.fishingbooker.com/charters/view/19612`);

    expect(CharterPage.charterTitleLabel).toHaveText("Fisherman's Friend Charter")
  });
    
  it("Verify that user can enter number of days, adults and children", () => {
    let days = 1
    let adults = 1
    let children = 1
  CharterPage.enterCharterCriteria(days, adults, children);
  });

  it("Verify that user can book charter and access user details page", () => {
    CharterPage.bookFirstAvailableDate();
    
    expect(DetailsPage.detailsContainer).toBeDisplayed();
    
  });
  it("Verify that user can enter user data and proceed to payment", () => {
    ///register page
    DetailsPage.continueButton.waitForDisplayed();
    DetailsPage.enterUserDetails("test", "user", "+23456543", "Hellooooooo!")

    expect(PaymentPage.paymentContainer).toBeDisplayed();  
  });

  it("Verify that user can enter payment data and proced to confirmation page", () => {
     //credit card page
     PaymentPage.enterPaymentData();
    
  });

  it("Verify that charter booking is confirmed and has a unique booking id", () => {
     //confirmed booking page
     ConfirmationPage.bookingConfirmationHeading.waitForDisplayed();
     ConfirmationPage.saveBookingIdToFile();
     ConfirmationPage.createPasswordInput.waitForDisplayed();
     ConfirmationPage.createPasswordInput.setValue("12342342")
     ConfirmationPage.createPasswordButton.click();
  });

});
