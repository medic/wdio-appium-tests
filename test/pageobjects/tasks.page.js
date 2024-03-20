const { $ } = require('@wdio/globals')
const Page = require('./page');

class TasksPage extends Page {
    
    get iconCommodity () {
        return $('//*[@text="icon-commodity"]');
    }

    get iconClose () {
        return $('//*[@text="Close"]');
    }

    async viewATask () {
        await super.clickDisplayedElem(super.tabTasks);
        await super.clickDisplayedElem(this.iconCommodity);
        await this.iconClose.click();
    }
}

module.exports = new TasksPage();
