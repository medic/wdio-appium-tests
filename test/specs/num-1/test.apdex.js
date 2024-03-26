// const { expect } = require('@wdio/globals');
// require('dotenv').config();
// const LoadPage = require('../../pageobjects/load.page');
// const LoginPage = require('../../pageobjects/login.page');
// const PeoplePage = require('../../pageobjects/people.page');
// const TasksPage = require('../../pageobjects/tasks.page');
// const MessagesPage = require('../../pageobjects/messages.page');
// const ReportsPage = require('../../pageobjects/reports.page');
// const PerformancePage = require('../../pageobjects/performance.page');

// const instanceUrl = process.env.KE_URL;
// const username = process.env.KE_USERNAME;
// const password = process.env.KE_PASSWORD;

// describe('Apdex Performance Workflows', () => {
//     before( async () => {
//         await LoadPage.loadInstance(instanceUrl);
//         await LoginPage.login(username, password);
//     })

//     // it('should sync the data', async () => {
//     //     await LoadPage.syncData();
//     //     await expect(LoadPage.menuTextSyncStatus).toHaveText("Currently syncing…");
//     //     browser.pause(5000);
//     // })

//     it('should view a person within the household', async () => {
//         await PeoplePage.viewPerson();
//     })

//     it('should view the community health workers area', async () => {
//         await PeoplePage.viewCHPArea();
//     })

//     it('should open the tasks page and view a task', async () => {
//         await TasksPage.viewATask();
//     })

//     it('should open the reports page and view a report', async () => {
//         await ReportsPage.viewAReport();
//     })

//     it('should open the messages page and view a message', async () => {
//         await MessagesPage.viewAMessage();
//     })

//     it('should open the performance page and relaunch the app', async () => {
//         await PerformancePage.viewPerformance();
//         await PerformancePage.relaunchApp();
//     })

//     // 2

//     it('should view a person within the household-2', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-2', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-2', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-2', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-2', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-2', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //3

//     it('should view a person within the household-3', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-3', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-3', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-3', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-3', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-3', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //4

//     it('should view a person within the household-4', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-4', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-4', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-4', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-4', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-4', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //5

//     it('should view a person within the household-5', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-5', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-5', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-5', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-5', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-5', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //6

//     it('should view a person within the household-6', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-6', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-6', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-6', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-6', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-6', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //7

//     it('should view a person within the household-7', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-7', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-7', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-7', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-7', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-7', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //8

//     it('should view a person within the household-8', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-8', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-8', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-8', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-8', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-8', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //9

//     it('should view a person within the household-9', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-9', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-9', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-9', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-9', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-9', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

//     //10

//     it('should view a person within the household-10', async () => {
//         await PeoplePage.viewPerson()
//     })

//     it('should view the community health workers area-10', async () => {
//         await PeoplePage.viewCHPArea()
//     })

//     it('should open the tasks page and view a task-10', async () => {
//         await TasksPage.viewATask()
//     })

//     it('should open the reports page and view a report-10', async () => {
//         await ReportsPage.viewAReport()
//     })

//     it('should open the messages page and view a message-10', async () => {
//         await MessagesPage.viewAMessage()
//     })

//     it('should open the performance page and relaunch the app-10', async () => {
//         await PerformancePage.viewPerformance()
//         await PerformancePage.relaunchApp()
//     })

// })

