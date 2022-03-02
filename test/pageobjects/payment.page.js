const Page = require("./page");
const charterData = require("../data/charterData.json");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends Page {
  get creditCardNumberInput() {
    return $('input[id="credit-card-number"]');
  }
  get creditCardExpirationInput() {
    return $('[id="expiration"]');
  }
  get creditCardCvvInput() {
    return $('[id="cvv"]');
  }
  get creditCardHolderNameInput() {
    return $('[id="cardholder-name"]');
  }
  get zipCodeInput() {
    return $('[id="postal-code"');
  }
  get confirmBookingButton() {
    return $('//button[text()="Confirm booking"]');
  }
  get finalizingPaymentMessage() {
    return $('//*[text()="Finalizing your payment"]');
  }

  get creditCardNumberiFrame() {
    return $('[id="braintree-hosted-field-number"]');
  }
  get credCardExpirationiFrame() {
    return $('[id="braintree-hosted-field-expirationDate"]');
  }
  get credCardCvviFrame() {
    return $('[id="braintree-hosted-field-cvv"]');
  }
  get credCardHolderiFrame() {
    return $('[id="braintree-hosted-field-cardholderName"]');
  }
  get credCardZipiFrame() {
    return $('[id="braintree-hosted-field-postalCode"]');
  }
  get paymentContainer() {
    return $('[data-testid="checkout-step-3"]');
  }

  enterPaymentData() {
    this.confirmBookingButton.waitForDisplayed();
    browser.switchToFrame(this.creditCardNumberiFrame);
    this.creditCardNumberInput.setValue(charterData.payment.creditCardNumber);
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardExpirationiFrame);
    this.creditCardExpirationInput.setValue(
      charterData.payment.creditCardExpirationDate
    );
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardCvviFrame);
    this.creditCardCvvInput.setValue(charterData.payment.creditCardCvv);
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardHolderiFrame);
    this.creditCardHolderNameInput.setValue(
      charterData.payment.creditCardHolderName
    );
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardZipiFrame);
    this.zipCodeInput.setValue(charterData.payment.zipcode);
    browser.switchToParentFrame();
  }
}

module.exports = new PaymentPage();
