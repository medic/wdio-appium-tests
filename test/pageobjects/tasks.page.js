const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TasksPage extends Page {
    /**
     * define selectors using getter methods
     */
    get iconCommodity () {
        return $('//*[@text="icon-commodity"]');
    }

    get iconClose () {
        return $('//*[@text="Close"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to view a task 
     */
    async viewATask () {
        await super.clickDisplayedElem(super.tabTasks);
        await super.clickDisplayedElem(this.iconCommodity);
        await this.iconClose.click();
    }
}

module.exports = new TasksPage();
