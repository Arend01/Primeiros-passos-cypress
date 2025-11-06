import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardpage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe(' Login Orange HRM test', () => {

  it('login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('login - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkAccessInvalid()
    dashboardPage.checkDashboardPage()
  })

})