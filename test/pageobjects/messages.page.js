const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MessagesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get listMessages () {
        return $('(//android.widget.ListView)[1]')
    }

    get iconBack () {
        return $('//*[@text="Back"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to view a message 
     */
    async viewAMessage () {
        await super.clickDisplayedElem(super.tabMessages);
        await super.clickDisplayedElem(this.listMessages);
        await this.iconBack.click();
    }
}

module.exports = new MessagesPage();
