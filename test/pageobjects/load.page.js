const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoadPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputInstanceUrl () {
        return $('//android.widget.EditText[@resource-id="org.medicmobile.webapp.mobile:id/txtAppUrl"]');
    }

    get btnSave () {
        return $('//android.widget.Button[@resource-id="org.medicmobile.webapp.mobile:id/btnSaveSettings"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to load a CHT instance using a custom url
     */
    async loadInstance (url) {
        await super.airplaneModeOff();
        await super.btnCustom.click();
        await this.inputInstanceUrl.setValue(url);
        await this.btnSave.click();
    }
}

module.exports = new LoadPage();