const { expect } = require('@wdio/globals')
const LoadPage = require('../../pageobjects/load.page')
const LoginPage = require('../../pageobjects/login.page')
const PeoplePage = require('../../pageobjects/people.page')
const TasksPage = require('../../pageobjects/tasks.page')
const MessagesPage = require('../../pageobjects/messages.page')
const ReportsPage = require('../../pageobjects/reports.page')
const PerformancePage = require('../../pageobjects/performance.page')

const instanceUrl = 'https://care-teams-4x.dev.medicmobile.org/'
const username = 'gladys'
const password = 'OJM2UEC34X!'

describe('Apdex Performance Workflows', () => {
    before( async () => {
        await LoadPage.loadInstance(instanceUrl)
        await LoginPage.login(username, password)
    })

    it('should view a person within the household', async () => {
        await PeoplePage.viewPerson()
    })

    it('should view the community health workers area', async () => {
        await PeoplePage.viewCHPArea()
    })

    it('should open the tasks page and view a task', async () => {
        await TasksPage.viewATask()
    })

    it('should open the reports page and view a report', async () => {
        await ReportsPage.viewAReport()
    })

    it('should open the messages page and view a message', async () => {
        await MessagesPage.viewAMessage()
    })

    it('should open the performance page and relaunch the app', async () => {
        await PerformancePage.viewPerformance()
        await PerformancePage.relaunchApp()
    })

})

