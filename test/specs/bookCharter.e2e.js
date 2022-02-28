const LoginPage = require("../pageobjects/login.page");
const CharterPage = require("../pageobjects/charter.page");
const DetailsPage = require("../pageobjects/details.page");
const PaymentPage = require("../pageobjects/payment.page");
const ConfirmationPage = require("../pageobjects/confirmation.page");
const charterData = require("../data/charterData.json");
const loginCredentials = require("../data/credentials.json");

describe("My Login application", () => {
  it("Verify that user can access specific charter", () => {
    browser.url(`https://${loginCredentials.username}:${loginCredentials.pwd}@qahiring.dev.fishingbooker.com/charters/view/19612`);

    expect(CharterPage.charterTitleLabel).toHaveText("Fisherman's Friend Charter")
  });
    
  it("Verify that user can enter number of days, adults and children", () => {
    CharterPage.enterCharterCriteria(charterData.charter.days, charterData.charter.adults, charterData.charter.children);

    expect(CharterPage.amountOfSelectedDays).toEqual(charterData.charter.days)
    expect(CharterPage.amountOfSelectedChidren).toEqual(charterData.charter.children)
    expect(CharterPage.amountOfSelectedAdults()).toEqual(charterData.charter.adults)
  });

  it("Verify that user can book charter and access user details page", () => {
    CharterPage.findAndBookFirstAvailableDate(charterData.charter.tripType[2]);
    
    expect(DetailsPage.detailsContainer).toBeDisplayed();
  });
  it("Verify that user can enter user data and proceed to payment", () => {
    DetailsPage.continueButton.waitForDisplayed();
    DetailsPage.enterUserDetails(charterData.user.firstName, charterData.user.lastName, charterData.user.phoneNumber, charterData.user.message)

    expect(PaymentPage.paymentContainer).toBeDisplayed();  
  });

  it("Verify that user can enter payment data and proced to confirmation page", () => {
     PaymentPage.enterPaymentData();
     PaymentPage.confirmBookingButton.click();
    //  expect(ConfirmationPage.bookingConfirmationHeading).toBeDisplayed(); 
     expect(PaymentPage.finalizingPaymentMessage).toHaveText("Finalizing your payment");  
  });

  it("Verify that charter booking is confirmed and has a booking id", () => {
     ConfirmationPage.bookingConfirmationHeading.waitForDisplayed()
     ConfirmationPage.saveBookingIdToFile();
     ConfirmationPage.createPasswordInput.waitForDisplayed();
     ConfirmationPage.createPasswordInput.setValue("12342342")
     ConfirmationPage.createPasswordButton.click();

     expect(ConfirmationPage.bookingNumberConfirmation).toBeDisplayed();
  });

});
