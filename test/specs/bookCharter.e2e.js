const LoginPage = require("../pageobjects/login.page");
const CharterPage = require("../pageobjects/charter.page");
const DetailsPage = require("../pageobjects/details.page");
const PaymentPage = require("../pageobjects/payment.page");
const ConfirmationPage = require("../pageobjects/confirmation.page");
const charterData = require("../data/charterData.json");

describe("My Login application", () => {
  fit("Verify that user can access specific charter", () => {
    let username = "fishingbooker";
    let pwd = "QAFBTest";
    browser.url(`https://${username}:${pwd}@qahiring.dev.fishingbooker.com/charters/view/19612`);

    expect(CharterPage.charterTitleLabel).toHaveText("Fisherman's Friend Charter")
  });
    
  fit("Verify that user can enter number of days, adults and children", () => {
    CharterPage.enterCharterCriteria(charterData.charter.days, charterData.charter.adults, charterData.charter.children);

    expect(CharterPage.amountOfSelectedDays).toEqual(charterData.charter.days)
    expect(CharterPage.amountOfSelectedChidren).toEqual(charterData.charter.children)
    expect(CharterPage.amountOfSelectedAdults()).toEqual(charterData.charter.adults)
  });

  it("Verify that user can book charter and access user details page", () => {
    CharterPage.bookFirstAvailableDate();
    
    expect(DetailsPage.detailsContainer).toBeDisplayed();
    
  });
  it("Verify that user can enter user data and proceed to payment", () => {
    ///register page
    DetailsPage.continueButton.waitForDisplayed();
    DetailsPage.enterUserDetails(charterData.user.firstName, charterData.user.lastName, charterData.user.phoneNumber, charterData.user.message)

    expect(PaymentPage.paymentContainer).toBeDisplayed();  
  });

  it("Verify that user can enter payment data and proced to confirmation page", () => {
     //credit card page
     PaymentPage.enterPaymentData();
     expect(ConfirmationPage.bookingConfirmationHeading.waitForDisplayed()).toBeDisplayed();  
  });

  it("Verify that charter booking is confirmed and has a booking id", () => {
     //confirmed booking page
     
     ConfirmationPage.saveBookingIdToFile();
     ConfirmationPage.createPasswordInput.waitForDisplayed();
     ConfirmationPage.createPasswordInput.setValue("12342342")
     ConfirmationPage.createPasswordButton.click();

     expect(ConfirmationPage.bookingNumberConfirmation).toBeDisplayed();
  });

});
