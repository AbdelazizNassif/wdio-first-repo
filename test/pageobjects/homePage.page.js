

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get listOfLinks () {
        return $$('ul > li');
    }

    get getFooter ()
    {
        return $("//a[text()='Elemental Selenium']")
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async textOfLinkByIndex (index) {
        return (await this.listOfLinks[index]).getText ()
    }

    async clickFirstLink () {
        // return (await this.listOfLinks[1]).click ()
        return ((await this.listOfLinks[0]).$("a")).click ()
    }

    async isFooterDisplayed ()
    {
        return (await this.getFooter).isDisplayed()
    }
    async isFooterDisplayedInViewPort ()
    {
        return (await this.getFooter).isDisplayedInViewport()
    }
    async getFooterText ()
    {
        return (await this.getFooter).getText()
    }

    async scrollToPageFooter () 
    {
        return (await this.getFooter).scrollIntoView()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        await super.open('/');
    }
}

module.exports = new HomePage();
