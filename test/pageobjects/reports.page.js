const { $ } = require('@wdio/globals')
const Page = require('./page');

class ReportsPage extends Page {
    
    get iconHealthCare () {
        return $('(//*[@text="icon-healthcare"])[1]');
    }

    get iconBack () {
        return $('//*[@text="Back"]');
    }

    async viewAReport () {
        await super.clickDisplayedElem(super.tabReports);
        await super.clickDisplayedElem(this.iconHealthCare);
        await this.iconBack.click();
    }
}

module.exports = new ReportsPage();
