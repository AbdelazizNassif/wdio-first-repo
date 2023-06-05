

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WaitDynamicElements extends Page {
    /**
     * define selectors using getter methods
     */
    get startButton () {
        return $('#start > button');
    }

    get helloMessage () {
        return $('#finish > h4');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickStartButton () {
        await this.startButton.click();
        // (await this.helloMessage).waitForDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        await super.open('dynamic_loading/2');
    }
}

module.exports = new WaitDynamicElements();
