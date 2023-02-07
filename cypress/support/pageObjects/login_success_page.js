class loginSuccessPage {

    get clickOnRegister() {
        return cy.get('a.btn');
    }
    get enterTitle() {
        return cy.get('#user_title', { timeout: 20000 });
    }
    get enterFirstName() {
        return cy.get('#user_firstname');
    }
    get enterSurName() {
        return cy.get('#user_surname');
    }
    get enterPhoneNumber() {
        return cy.get('#user_phone');
    }
    get selectYear() {
        return cy.get('#user_dateofbirth_1i')
    }
    get selectMonth() {
        return cy.get('#user_dateofbirth_2i')
    }
    get selectDay() {
        return cy.get('#user_dateofbirth_3i')
    }
    get selectCheckBox() {
        return cy.get('#licencetype_f');
    }
    get selectLicencePeriod() {
        return cy.get('#user_licenceperiod')
    }
    get selectUserOccupotioId() {
        return cy.get('#user_occupation_id')
    }
    get enterStreetAddress() {
        return cy.get('#user_address_attributes_street')
    }
    get enterCity(){
        return cy.get('#user_address_attributes_city')
    }

    get enterCountry(){
        return cy.get('#user_address_attributes_county')
    }
    get enterPostalCode(){
        return cy.get('#user_address_attributes_postcode')
    }
    get enterEmailID(){
        return cy.get('#user_user_detail_attributes_email')
    }
    get enterPassword(){
        return cy.get('#user_user_detail_attributes_password')
    }
    get enterCofirmPassword(){
        return cy.get('#user_user_detail_attributes_password_confirmation')
    }
    get createUser() {
        return cy.get('[name="submit"]');
    }



  
}

export default loginSuccessPage