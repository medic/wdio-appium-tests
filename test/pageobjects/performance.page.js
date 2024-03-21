const { $ } = require('@wdio/globals')
const Page = require('./page');

class PerformancePage extends Page {
    
    get iconMenu () {
        return $('//*[@resource-id="header-dropdown-link"]');
    }

    async viewPerformance () {
        await super.clickDisplayedElem(super.tabPerformance);
        await this.iconMenu.click();
        await browser.pause(5000);
    }

    async relaunchApp () {
        await super.relaunchApp();
        await browser.pause(10000);
    }
}

module.exports = new PerformancePage();
