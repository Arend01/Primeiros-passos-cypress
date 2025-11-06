import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardpage'
import MenuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myInfoPage'

var Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyinfoPage()

describe('Orange HRM test', () => {

  it('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.natural({ min: 1, max: 20 }), chance.natural({ min: 1, max: 20 }), chance.natural({ min: 1, max: 20 }), chance.date({string: true}), 'driversLicenseDate', 'Field')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })

  it('login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})