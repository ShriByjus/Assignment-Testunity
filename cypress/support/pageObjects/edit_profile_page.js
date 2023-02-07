class editProfilePage {

    get selectEditProdfileTab() {
        return cy.get('#ui-id-5', { timeout: 20000 });
    }
    get editSurName() {
        return cy.get('#user_surname', { timeout: 20000 });
    }
    get editFirstName() {
        return cy.get('#user_firstname', { timeout: 20000 });
    }
    get editUserPhone() {
        return cy.get('#user_phone', { timeout: 20000 });
    }

    get editDOBYear() {
        return cy.get('#user_dateofbirth_1i', { timeout: 20000 });
    }
    get editDOBMonth() {
        return cy.get('#user_dateofbirth_2i', { timeout: 20000 });
    }
    get editDOBDay() {
        return cy.get('#user_dateofbirth_3i', { timeout: 20000 });
    }

    get selectLicenceType(){
        return cy.get('#user_licencetype_f', { timeout: 20000 });
    }
    get selectLicencePeriod(){
        return cy.get('#user_licenceperiod', { timeout: 20000 });
    }
    get selectOccupotion(){
        return cy.get('#user_occupation_id', { timeout: 20000 });
    }

    get editProfileCity(){
        return cy.get('#user_address_attributes_city', { timeout: 20000 });
    }
    get editProfileCountry(){
        return cy.get('#user_address_attributes_county', { timeout: 20000 });
    }
    get editProfilePincode(){
        return cy.get('#user_address_attributes_postcode', { timeout: 20000 });
    }
    get clickOnUpdateEditProfileButton(){
        return cy.get('input[value="Update User"]')
    }

    //user logout section
    get clickLogOutButton(){
        return cy.get('input[value="Log out"]')
    }
     
}

export default editProfilePage