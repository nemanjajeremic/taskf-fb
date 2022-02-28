

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends Page {
  

  get creditCardNumberInput(){return $('input[id="credit-card-number"]')} 
  get creditCardExpirationInput(){return $('[id="expiration"]')} 
  get creditCardCvvInput(){return $('[id="cvv"]')} 
  get creditCardHolderNameInput(){ return $('[id="cardholder-name"]')}
  get zipCodeInput(){ return $('[id="postal-code"')} 
  get confirmBookingButton(){ return $('//button[text()="Confirm booking"]')}
  
  get creditCardNumberiFrame (){return $('[id="braintree-hosted-field-number"]')} 
  get credCardExpirationiFrame (){return $('[id="braintree-hosted-field-expirationDate"]')} 
  get credCardCvviFrame (){return $('[id="braintree-hosted-field-cvv"]')} 
  get credCardHolderiFrame (){return $('[id="braintree-hosted-field-cardholderName"]')} 
  get credCardZipiFrame (){return $('[id="braintree-hosted-field-postalCode"]')} 
  get paymentContainer(){
    return $('[data-testid="checkout-step-3"]')
  }

  enterPaymentData(){
    let creditCardNumber = "378282246310005"
    let creditCardExpirationDate = "0325"
    let creditCardCvv = "1234"
    let creditCardHolderName = "Test User"
    let zipcode = "12345"

    this.confirmBookingButton.waitForDisplayed();
    browser.switchToFrame(this.creditCardNumberiFrame)
    this.creditCardNumberInput.setValue(creditCardNumber)
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardExpirationiFrame)
    this.creditCardExpirationInput.setValue(creditCardExpirationDate)
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardCvviFrame)
    this.creditCardCvvInput.setValue(creditCardCvv)
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardHolderiFrame)
    this.creditCardHolderNameInput.setValue(creditCardHolderName)
    browser.switchToParentFrame();
    browser.switchToFrame(this.credCardZipiFrame)
    this.zipCodeInput.setValue(zipcode)
    browser.switchToParentFrame();
    this.confirmBookingButton.click();
  }
}

module.exports = new PaymentPage();
