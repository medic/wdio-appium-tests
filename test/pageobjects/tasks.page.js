const { $ } = require('@wdio/globals')
const Page = require('./page');

class TasksPage extends Page {
    
    get iconCommodity () {
        return $('//*[@text="icon-commodity"]');
    }

    get iconPregnancy () {
        return $('//*[@text="icon-pregnancy"]');
    }

    get iconClose () {
        return $('//*[@text="Close"]');
    }

    get btnYes () {
        return $('//android.widget.Button[@text="Yes"]');
    }

    async viewATask () {
        await super.clickDisplayedElem(super.tabTasks);
        await super.clickDisplayedElem(this.iconCommodity);
        await this.iconClose.click();
        await this.iconCommodity.waitForDisplayed();
    }

    async viewATaskNE () {
        await super.clickDisplayedElem(super.tabTasks);
        await super.clickDisplayedElem(this.iconPregnancy);
        await browser.pause(2000);
        await this.iconClose.click();
        await this.clickDisplayedElem(this.btnYes);
        await this.iconPregnancy.waitForDisplayed();
    }
}

module.exports = new TasksPage();
