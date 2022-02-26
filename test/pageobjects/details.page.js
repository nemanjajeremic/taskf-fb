

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailsPage extends Page {


    get firstNameInput (){
      return $('[data-testid="checkout-first-name-input"]')
    }
    get lastNameInput (){
      return $('[data-testid="checkout-last-name-input"]')
    } 
    get emailInput (){
      return $('[data-testid="checkout-email-input"]')
    }
    get phoneNumberInput(){
      return $('input[type="tel"]')
    }
    get messageInput(){
      return $('[data-testid="special-requests-textarea"]')
    }
    get continueButton(){
      return $('button[type="Submit"]')
    }

    createRandomEmail(suffix){
      let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
      let string = '';
      for(let ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
      }
      let email = string + `${suffix}`
      return email
    }

    enterUserDetails(firstName, lastName, phoneNumber, specialRequestMessage){
    
      let email = this.createRandomEmail('@fishingbooker.com')

    this.firstNameInput.setValue(firstName)
    this.lastNameInput.setValue(lastName)
    this.emailInput.setValue(email)
    this.phoneNumberInput.setValue(phoneNumber)
    this.messageInput.setValue(specialRequestMessage)
    this.continueButton.click();
   
    }



  
   
}

module.exports = new DetailsPage();
