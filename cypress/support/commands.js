
import loginFailurePage from "./pageObjects/login_failure_page";
import loginSuccessPage from "./pageObjects/login_success_page";
import requestQoutation from "./pageObjects/request_quotation_page";
import retriveQoutation from "./pageObjects/retrieve_quotation_page";
import profile from "./pageObjects/profile_page";
import eidtProfile from "./pageObjects/edit_profile_page";
const failurePage = new loginFailurePage();
const successPage = new loginSuccessPage();
const qoutationRequest = new requestQoutation();
const retriveRequest = new retriveQoutation();
const userProfile = new profile();
const profileEdit = new eidtProfile();

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add('visitDemoGuru99', () => {
    var url = `https://demo.guru99.com/insurance/v1/index.php`;
    cy.visit(url);
    cy.url().should('include', 'demo.guru99.com');
    cy.wait(3000)
})

Cypress.Commands.add('visitDemoGuru99AndCreateQoutation', () => {
    var url = `https://demo.guru99.com/insurance/v1/header.php`;
    cy.visit(url);
    cy.url().should('include', 'demo.guru99.com');
    cy.wait(3000)
})

Cypress.Commands.add('loginFailure', () => {
    failurePage.enterEmailID.type('demo@gmail.com');
    failurePage.enterPassword.type('12345');
    failurePage.enterLoginButton.click(); 

    // let failureMessage = failurePage.validateFailureMessage();
    // let message = failureMessage.text();
    // console.log(message);
    // expect(message).equal("Enter your Email address and password correct");
    cy.wait(5000)
})

Cypress.Commands.add('loginSuccess', () => {
    console.log('creating user')
    successPage.clickOnRegister.click();
    successPage.enterTitle.select('Mrs').should('have.value', 'Mrs')
    successPage.enterFirstName.type('shrinath')
    successPage.enterPhoneNumber.type('9898989898')
    successPage.enterSurName.type('mirashi')
    successPage.selectYear.select('1992').should('have.value', '1992')
    successPage.selectMonth.select('April').should('have.value', '4')
    successPage.selectDay.select('6').should('have.value', '6')
    successPage.selectCheckBox.click();
    successPage.selectLicencePeriod.select('5').should('have.value', '5')
    successPage.selectUserOccupotioId.select('Engineer').should('have.value', '12')
    successPage.enterStreetAddress.type('IBC Park');
    successPage.enterCity.type('banglore');
    successPage.enterCountry.type('banglore');
    successPage.enterPostalCode.type('581329');
    successPage.enterEmailID.type('seenumirashi1992@gmail.com');
    successPage.enterPassword.type('banglore');
    successPage.enterCofirmPassword.type('banglore');
    successPage.createUser.click();
    cy.wait(5000)
    console.log('user creating is done')
    cy.wait(3000)
})
Cypress.Commands.add('userLoginNewCreadential', () => {
    console.log('user login')
    failurePage.enterEmailID.type('seenumirashi1992@gmail.com');
    failurePage.enterPassword.type('banglore');
    failurePage.enterLoginButton.click(); 
    console.log('user successfully login')
    cy.wait(5000)
})
Cypress.Commands.add('requestQoutation', () => {
    console.log('user requesting Qoutation')
    qoutationRequest.selectRequestQoutation.click();
    qoutationRequest.selectBreakDownCover.select('At home').should('have.value', '3')
    qoutationRequest.selectWindScreenRepair.click();
    qoutationRequest.enterQouationIncident.type('5');
    qoutationRequest.enterVehicleRegNo.type('KA-25-U 1234');
    qoutationRequest.enterVehicleMilage.type('35');
    qoutationRequest.enterVehicleValue.type('65000');
    qoutationRequest.enterPerkingLocation.select('Private Property').should('have.value', 'Private property')
    qoutationRequest.enterVehiclePolicyYear.select('2016').should('have.value','2016')
    qoutationRequest.enterVehiclePolicyMonth.select('September').should('have.value','9')
    qoutationRequest.enterVehiclePolicyDay.select('4').should('have.value','4')
    qoutationRequest.clicKOnSaveQoutationButton.click();
    console.log('Requesting of Qoutation part is done ');
    cy.wait(5000)
   
})
Cypress.Commands.add('retriveQoutation', () => {
    retriveRequest.selectRetriveQoutation.click();
    retriveRequest.enterIdentificationNumber.type('21556');
    retriveRequest.clickOnRetirveButton.click();
    cy.wait(5000)
})
Cypress.Commands.add('profile', () => {
    userProfile.selectProfileTab.click();
    cy.wait(5000)
})
Cypress.Commands.add('editProfile', () => {
    profileEdit.selectEditProdfileTab.click();
    successPage.enterTitle.select('Miss').should('have.value', 'Miss')
    profileEdit.editSurName.clear();
    profileEdit.editSurName.type('patil');
    profileEdit.editFirstName.clear();
    profileEdit.editFirstName.type('Anand');
    profileEdit.editUserPhone.clear();
    profileEdit.editUserPhone.type('7878787878');
    profileEdit.editDOBYear.select('1995').should('have.value', '1995')
    profileEdit.editDOBMonth.select('April').should('have.value', '4')
    profileEdit.editDOBDay.select('2').should('have.value', '2')
    profileEdit.selectLicenceType.click();
    profileEdit.selectLicencePeriod.select('4').should('have.value', '4')
    profileEdit.selectOccupotion.select('Student').should('have.value', '6')
    successPage.enterStreetAddress.type('IBC Park');
    profileEdit.editProfileCity.clear();
    profileEdit.editProfileCity.type('hyderabad');
    profileEdit.editProfileCountry.clear();
    profileEdit.editProfileCountry.type('India');
    profileEdit.editProfilePincode.clear();
    profileEdit.editProfilePincode.type('600001');
    profileEdit.clickOnUpdateEditProfileButton.click();
    cy.wait(5000)
})
Cypress.Commands.add('logoutSection', () => {
    profileEdit.clickLogOutButton.click();
    cy.wait(5000)
})
