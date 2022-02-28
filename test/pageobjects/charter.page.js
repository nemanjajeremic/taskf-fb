

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CharterPage extends Page {


  get charterTitleLabel(){
    return $('h1[class="headline"]')
  }

  isBookingAvailable(){
    let value = this.fourHourTripDiv.getAttribute('class');
    if(value.includes('unavailable')){
        return false;
    }
  }

  get fourHourTripDiv(){
    return $('//span[normalize-space()="4 hour trip"]/ancestor::li')
  }

  get dateSelect(){
    return $('[id="booking_date_availability_form_search"]');
  }

  get today(){
    return $("td[class='day']");
  }

  get numberOfDaysInput(){
    return $("select[id='booking_days']");
  }

  numberOfDays(number){
    return $(`option[value='${number}']`);
  }

  get numberOfPeopleInput(){
    return $("form[name='booking_form_step1'] [class='search-form-persons'] input[type='text']")
  }

  get addAdultButton(){
    return $("form[name='booking_form_step1'] button[class*='adults-plus']");
  }

  get removeAdultButton(){
    return $("form[name='booking_form_step1'] button[class*='adults-minus']");
  }

  get addChildButton(){
    return $("form[name='booking_form_step1'] button[class*='children-plus']");
  }

  get removeChildButton(){
    return $("form[name='booking_form_step1'] button[class*='children-minus']");
  }

  get checkAvailabilityButton(){
    return $('[id="check-availability-btn"]');
  }

  get nextAvailableDate(){
    return $("//td[contains(@class, 'active') and contains(@class, 'day')]//following::td[not(contains(@class, 'disabled'))]")
  }

  get instantBookButton(){
    return $("//span[normalize-space()='4 hour trip']/ancestor::li[@class='package-item']//div[@class='row']//button[normalize-space()='Instant Book']");
  } 

  get changeSearchButton(){
    return $('//button[@id="change-search-btn"]')
  }

  get adultsNumberLabel(){
    return $('[id="booking_form_step1"] [class="adults-number"]')
  }
  
  get childrensNumberLabel(){
    return $('[id="booking_form_step1"] [class="children-number"]')
  }

  setNumberOfPeople(adults, children){
    let currentNumberOfAdults = this.adultsNumberLabel.getText()
    let currentNumberOfChildren = this.childrensNumberLabel.getText()
    console.log('--------------------------')
    console.log(currentNumberOfAdults)
    console.log(currentNumberOfChildren)
    while(currentNumberOfAdults < adults){
      this.addAdultButton.click();
      currentNumberOfAdults = this.adultsNumberLabel.getText()

    }
    while(currentNumberOfAdults > adults){
      this.removeAdultButton.click();
      currentNumberOfAdults = this.adultsNumberLabel.getText()

    }
    while(currentNumberOfAdults > adults){
      this.removeChildButton.click();
      currentNumberOfChildren = this.adultsNumberLabel.getText()

    }
    while(currentNumberOfChildren < children){
      this.addChildButton.click();
      currentNumberOfChildren = this.childrensNumberLabel.getText()

    } 
  }


  enterCharterCriteria(days, adults, children){
    this.dateSelect.click();
    this.today.click();
    this.numberOfDaysInput.click();
    this.numberOfDays(days).click();
    this.numberOfPeopleInput.click();
    this.setNumberOfPeople(adults,children);
    // this.addChildButton.click();
    //click somewhere out of focus and verify that dropdown is hidden
    this.checkAvailabilityButton.click();
  }

  bookFirstAvailableDate(){
    browser.pause(500)
    let flag = this.isBookingAvailable();
    while(flag === false){
      this.changeSearchButton.waitForDisplayed();
      this.dateSelect.click();
      this.nextAvailableDate.click();
      this.checkAvailabilityButton.click();
      browser.pause(500)
      flag = this.isBookingAvailable();
    }
    this.instantBookButton.click();
  } 
}

module.exports = new CharterPage();
