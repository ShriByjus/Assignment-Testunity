class requestQoutationPage {

    get selectRequestQoutation() {
        return cy.get('#ui-id-2', { timeout: 20000 });
    }
    get selectBreakDownCover() {
        return cy.get('#quotation_breakdowncover', { timeout: 20000 });
    }
    get selectWindScreenRepair() {
        return cy.get('#quotation_windscreenrepair_t')
    }
    get enterQouationIncident() {
        return cy.get('#quotation_incidents')
    }

    get enterVehicleRegNo() {
        return cy.get('#quotation_vehicle_attributes_registration')
    }
    get enterVehicleMilage() {
        return cy.get('#quotation_vehicle_attributes_mileage')
    }
    get enterVehicleValue() {
        return cy.get('#quotation_vehicle_attributes_value')
    }

    get enterPerkingLocation() {
        return cy.get('#quotation_vehicle_attributes_parkinglocation')
    }
    get enterVehiclePolicyYear() {
        return cy.get('#quotation_vehicle_attributes_policystart_1i')
    }
    get enterVehiclePolicyMonth() {
        return cy.get('#quotation_vehicle_attributes_policystart_2i')
    }
    get enterVehiclePolicyDay() {
        return cy.get('#quotation_vehicle_attributes_policystart_3i')
    }
    get clicKOnSaveQoutationButton(){
        return cy.get('input[value="Save Quotation"]')
    }

    get coptyIdentificationNo(){
        return cy.get(':nth-child(3)');
    }
    

  
}

export default requestQoutationPage