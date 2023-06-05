import { Key } from 'webdriverio'



const CheckboxesPage = require("../pageobjects/checkboxes.page");

describe("My handle checkboxes", () => {


  it("should check first checkbox ", async () => {
    await CheckboxesPage.open();
    await expect(CheckboxesPage.checkboxes[0]).not.toBeChecked ()
    await CheckboxesPage.checkFirstCheckbox ()
    await expect(CheckboxesPage.checkboxes[0]).toBeChecked ()
    await browser.pause(5000)
    await expect(CheckboxesPage.checkboxes[1]).toBeChecked ()
  });

  
  it("should check first checkbox nj ", async () => {
    await browser.url(`${browser.options.baseUrl}/context_menu`)
    const myButton = await $('#hot-spot')
    await myButton.click({ button: 'right' })
  });
  it("should check first checkbox nj aklrerts", async () => {
    await browser.url(`${browser.options.baseUrl}/javascript_alerts`)
    await $("//button[text()='Click for JS Alert']").click ()
await browser.pause(5000)

    
  });

  it("hover over elements  ", async () => {
    await browser.url(`${browser.options.baseUrl}/hovers`)
    await $('(//*[@class="figure"])[1]').moveTo()

    await expect (await $('(//*[@class="figcaption"]/h5)[1]')).toBeDisplayed()
    await expect (await $('(//*[@class="figcaption"]/h5)[1]')).toHaveText( "name: user1");
  });

  it("hover over elements  33jkbkbkh", async () => {
    await browser.url(`${browser.options.baseUrl}/key_presses`)
    await $('#target').click()
    await $('#target').setValue( " Fwf vwe")
    await browser.keys([Key.Backspace])

    await expect ( await $("#result") ).toHaveText ("You entered: BACK_SPACE")

  });
});
