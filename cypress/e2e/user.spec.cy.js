import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardpage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM test', () => {

  const selectorsList = {
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
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

  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    //cy.get(selectorsList.myInfoButton).click()
    //cy.get(selectorsList.firstNameField).clear().type('PrimeiroTest')
    //cy.get(selectorsList.middleNameField).clear().type('SegundoTest')
    //cy.get(selectorsList.lastNameField).clear().type('terceiroTest')
    //cy.get(selectorsList.genericField).clear().eq(4).type('Employee')
    //cy.get(selectorsList.genericField).clear().eq(5).type('otherIdTest')
    //cy.get(selectorsList.genericField).clear().eq(6).type('licenseNumTest')
    //cy.get(selectorsList.dateField).clear().eq(0).type('2025-12-31')
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericField).clear().eq(9).type('TestField')
    //cy.get(selectorsList.genericCombobox).eq(0).click()
    //cy.get(selectorsList.SelectNation).click()
    //cy.get(selectorsList.genericCombobox).eq(1).click()
    //cy.get(selectorsList.selectmartinalStatus).click()
    //cy.get(selectorsList.saveButton).eq(1).click()
    //.get('.oxd-toast-close')
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})