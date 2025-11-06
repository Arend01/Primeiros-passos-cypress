class MyinfoPage {
    selectorsList() {
        const selectors = {

            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField:'[name="lastName"]',
            genericField: '.oxd-input', 
            dateField: '[placeholder="yyyy-dd-mm"]',
            dateCloseButton: '.--close',
            genericCombobox: '.oxd-select-text--arrow',
            SelectNation: ':nth-child(7) > span',
            selectmartinalStatus: ':nth-child(4) > span',
            saveButton: '[type="submit"]',

        }

        return selectors
        
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }
    
    fillEmployeeDetails(EmployeeId, otherId, driversLicenseNumber, expireDate, Field) {
        cy.get(this.selectorsList().genericField).clear().eq(4).type(EmployeeId)
        cy.get(this.selectorsList().genericField).clear().eq(5).type(otherId)
        cy.get(this.selectorsList().genericField).clear().eq(6).type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).clear().eq(0).type(expireDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).clear().eq(9).type(Field)
    }

    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(1).click()
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().SelectNation).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().selectmartinalStatus).click()
    }

}

export default MyinfoPage