

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkboxes () {
        return $$('#checkboxes > input');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkFirstCheckbox () {
        (await this.checkboxes[0]).click()
        // await this.checkboxes.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        await super.open('checkboxes');
    }
}

module.exports = new CheckboxesPage();
