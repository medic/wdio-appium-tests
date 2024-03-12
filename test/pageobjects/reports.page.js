const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ReportsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get iconHealthCare () {
        return $('(//*[@text="icon-healthcare"])[1]');
    }

    get iconBack () {
        return $('//*[@text="Back"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to view a report 
     */
    async viewAReport () {
        await super.clickDisplayedElem(super.tabReports);
        await super.clickDisplayedElem(this.iconHealthCare);
        await this.iconBack.click();
    }
}

module.exports = new ReportsPage();
