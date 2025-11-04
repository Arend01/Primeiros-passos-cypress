import userData from '../fixtures/user-data.json'

describe('Orange HRM test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField:'[name="lastName"]',
    genericField: '.oxd-input', 
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    saveButton: '[type="submit"]',
  }

  it.only('User Info Update - success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('PrimeiroTest')
    cy.get(selectorsList.middleNameField).clear().type('SegundoTest')
    cy.get(selectorsList.lastNameField).clear().type('terceiroTest')
    cy.get(selectorsList.genericField).clear().eq(4).type('Employee')
    cy.get(selectorsList.genericField).clear().eq(5).type('otherIdTest')
    cy.get(selectorsList.genericField).clear().eq(6).type('licenseNumTest')
    cy.get(selectorsList.dateField).clear().eq(0).type('2025-12-31')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).clear().eq(9).type('TestField')
    cy.get(selectorsList.saveButton).eq(1).click()
    cy.get('.oxd-toast-close')
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})