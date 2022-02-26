

const Page = require('./page');
fs = require('fs');

class ConfirmationPage extends Page {

    get createPasswordInput (){return $('[id="password"]')} 
    get createPasswordButton (){return $('[data-testid="auth-submit-button"]')} 
    get bookingConfirmationHeading (){return $('//*[contains(text(), "Your booking is now confirmed")]')} 
    get bookingIdText (){return $('[data-testid="booking-id"]').getText();}
    
    saveBookingId(){
      let bookingId = this.bookingIdText.slice(0, -1)
      fs.writeFile("bookingId.txt", bookingId, function (error) {
        if (error) {
          console.log(error)
        } else {
          console.log("Successfully written booking ID to file." )
        }
      })
    }
    ;

  
}

module.exports = new ConfirmationPage();
