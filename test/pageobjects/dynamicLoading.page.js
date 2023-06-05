

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get enableAndDisableButton () {
        return $('#input-example > button');
    }

    get enableInput () {
        return $('#input-example > input');
    }

    get enableMessage ()
    {
        return $('#input-example #message')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async enableInputField (text) {
        await this.enableAndDisableButton.click();
        await this.enableInput.waitForEnabled({timeout: 5000})
        await this.enableInput.setValue(text);
    }

    async disableInputField () {
        await this.enableAndDisableButton.click();
        await this.enableInput.waitForEnabled({timeout: 5000, reverse: true})
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        await super.open('dynamic_controls');
    }
}

module.exports = new DynamicLoadingPage();
