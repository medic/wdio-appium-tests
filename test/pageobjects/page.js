const { browser } = require('@wdio/globals');
const moment = require('moment-timezone');
const { execSync } = require('child_process');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

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


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to wait for element to be displayed before clicking
     */
    async clickDisplayedElem (elem) {
        await elem.waitForDisplayed();
        await elem.click();
    }

    async toggleAirplaneMode () {
        await driver.toggleAirplaneMode();
    }

    async airplaneModeOff () {
        driver.getNetworkConnection().then(nConnect => {
            if (nConnect == 1) {
                driver.toggleAirplaneMode();
                browser.pause(3000);
            }
        });
    }

    async relaunchApp () {
        await driver.execute('mobile: terminateApp', {appId: 'org.medicmobile.webapp.mobile'});
        await browser.pause(5000);
        await driver.execute('mobile: activateApp', {appId: 'org.medicmobile.webapp.mobile'});
    }

    async syncData () {
        console.log(`TIME IS::: ${await driver.getDeviceTime()}`);
        //change date here
        await browser.pause(5000);
        await this.tabDropdown.click();
        await this.clickDisplayedElem(this.menuItemSyncNow);
        await browser.pause(1000);
        await this.tabDropdown.click();
    }

    async extractCurrentDate(days) {
        const dateTimeString = await driver.getDeviceTime();
        var dateTime = moment(dateTimeString);
        if (days > 0) {
            dateTime = moment(dateTime).add(days, 'days');
        }

        const year = dateTime.year();
        const month = dateTime.month() + 1;
        const day = dateTime.date();
        const hour = dateTime.hour();
        const minute = dateTime.minute();

        return {year, month, day, hour, minute};
    }

    async updateCurrentDate (days) {
        const extractCurrentDate = await this.extractCurrentDate(days);
        console.log('TIME::: Year:', extractCurrentDate.year);
        console.log('TIME::: Month:', extractCurrentDate.month);
        console.log('TIME::: Day:', extractCurrentDate.day);
        console.log('TIME::: Hour:', extractCurrentDate.hour);
        console.log('TIME::: Minute:', extractCurrentDate.minute);
        console.log('TIME::: Extracted Components:', extractCurrentDate);
        const dateFormat = `date +"%${extractCurrentDate.month}%${extractCurrentDate.day}%${extractCurrentDate.hour}%${extractCurrentDate.minute}%${extractCurrentDate.year}"`;
        console.log('TIME::: Command is:', "adb -e shell su root date " + "`"  + dateFormat + "`");
        execSync("adb -e shell su root date " + "`"  + dateFormat + "`", { stdio: 'inherit' });
        // driver.executeScript('mobile: shell', {});
        browser.pause(20000);
    }

}
