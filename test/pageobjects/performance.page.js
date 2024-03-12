const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PerformancePage extends Page {
    /**
     * define selectors using getter methods
     */
    get iconMenu () {
        return $('//*[@resource-id="header-dropdown-link"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to view performance page 
     */
    async viewPerformance () {
        await super.clickDisplayedElem(super.tabPerformance);
        await this.iconMenu.click();
    }

    async relaunchApp () {
        await super.relaunchApp();
        await browser.pause(10000);
    }
}

module.exports = new PerformancePage();
