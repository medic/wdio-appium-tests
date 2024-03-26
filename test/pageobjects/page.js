const { browser } = require('@wdio/globals');
const moment = require('moment-timezone');
const { execSync } = require('child_process');

module.exports = class Page {

    get btnCustom() {
        return $('//*[@text="Custom"]');
    }

    get tabMessages() {
        return $('//*[@text="Messages"]');
    }

    get tabTasks() {
        return $('//*[@text="Tasks"]');
    }

    get tabReports() {
        return $('//*[@text="Reports"]');
    }

    get tabPeople() {
        return $('//*[@text="People"]');
    }

    get tabPerformance() {
        return $('//*[@text="Performance"]');
    }

    get tabDropdown() {
        return $('//android.view.View[@text=""]')
    }

    get menuItemSyncNow() {
        return $('//android.view.MenuItem[@text="Sync now"]')
    }

    get menuTextSyncStatus() {
        return $('(//*[@resource-id="header-dropdown"]//android.view.View)[2]')
    }

    get menuTextSyncTime() {
        return $('//android.view.View[contains(@text, "Last sync")]')
    }

    get menuItemAbout() {
        return $('//android.view.MenuItem[@text="About"]')
    }

    get menuItemSettings() {
        return $('//android.view.MenuItem[@text="User settings"]')
    }

    get menuItemReportBug() {
        return $('//android.view.MenuItem[@text="Report bug"]')
    }

    get scrollView () {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(5, 15)');
    }

    async scrollToElem (elem) {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(elem)');
    }

    async clickDisplayedElem (elem) {
        await elem.waitForDisplayed();
        await elem.click();
    }

    async toggleAirplaneMode (state) {
        driver.getNetworkConnection().then(nConnect => {
            if (nConnect == 1 && state == 'off') {
                execSync('adb shell cmd connectivity airplane-mode disable', { stdio: 'inherit' });
            }else if (nConnect == 6 && state == 'on') {
                execSync('adb shell cmd connectivity airplane-mode enable', { stdio: 'inherit' });
            }
        });
    }

    async relaunchApp () {
        await driver.execute('mobile: terminateApp', {appId: 'org.medicmobile.webapp.mobile'});
        await browser.pause(2000);
        await driver.execute('mobile: activateApp', {appId: 'org.medicmobile.webapp.mobile'});
    }

    async syncData () {
        console.log(`TIME IS::: ${await driver.getDeviceTime()}`);
        //change date here - WIP
        await browser.pause(5000);
        await this.clickDisplayedElem(this.tabDropdown);
        await this.clickDisplayedElem(this.menuItemSyncNow);
        await browser.pause(1000);
        await this.tabDropdown.click();
    }

    async extractCurrentDate(days) {
        const dateTimeString = await driver.getDeviceTime();
        let dateTime = moment(dateTimeString);
        if (days > 0) {
            dateTime = moment(dateTime).add(days, 'days');
        }

        const year = dateTime.format('YY');
        const month = dateTime.format('MM');
        const day = dateTime.format('DD');
        const hour = dateTime.format('HH');
        const minute = dateTime.format('mm');

        return {year, month, day, hour, minute};
    }
x
    async updateCurrentDate (days) {
        const extractCurrentDate = await this.extractCurrentDate(days);
        console.log('TIME::: Year:', extractCurrentDate.year);
        console.log('TIME::: Month:', extractCurrentDate.month);
        console.log('TIME::: Day:', extractCurrentDate.day);
        console.log('TIME::: Hour:', extractCurrentDate.hour);
        console.log('TIME::: Minute:', extractCurrentDate.minute);
        console.log('TIME::: Extracted Components:', extractCurrentDate);
        const ardDateFormat = `${extractCurrentDate.month}${extractCurrentDate.day}${extractCurrentDate.hour}${extractCurrentDate.minute}${extractCurrentDate.year}`;
        console.log('TIME::: Command is:', 'adb -e shell su root date ' + '`'  + ardDateFormat + '`');
        execSync('adb shell su root date ' + ardDateFormat, { stdio: 'inherit' });
        browser.pause(10000);
    }
}
