const WaitDynamicElements = require("../pageobjects/waitDyncamicElements.page");
const HomePage = require("../pageobjects/homePage.page");

describe("wait for elment to appear", () => {


  it("wait for elemetn to appear after clicking start button", async () => {
    await WaitDynamicElements.open();
    await WaitDynamicElements.clickStartButton();
    await expect(WaitDynamicElements.helloMessage).toBeDisplayed();
    await expect(WaitDynamicElements.helloMessage).toHaveText("Hello World!")
  });

  it ("Check find elements", async ()=> {
    await HomePage.open ();
    await expect ( HomePage.listOfLinks ).toBeElementsArrayOfSize({gte: 0})
    await expect (await HomePage.listOfLinks.length).toBeGreaterThan(0)
    console.log( "dass: " + await HomePage.listOfLinks.length)
    console.log("***LENGTH IS: " + await $$("ul > li").length)
    await $$("ul > li").forEach(async link => {
      // console.log(link.getText())
      await expect (link).not.toBeNull ()
      
    })

    await expect(await HomePage.textOfLinkByIndex(0)).toEqual("A/B Testing")
    await expect(await HomePage.isFooterDisplayed()).toBeTruthy()
    await expect(await HomePage.isFooterDisplayedInViewPort()).toBeFalsy()

    await expect(await HomePage.getFooterText()).toEqual("Elemental Selenium")

    await HomePage.clickFirstLink () 


    await expect(await browser.getUrl ()).toContain("abtest");

  })

  it ("Validates browser navigation", async ()=> {
    await HomePage.open ();
    await HomePage.clickFirstLink()
    await expect(await browser.getUrl ()).toContain("abtest");
  })

  it ("Check find elements df", async ()=> {
    await HomePage.open ();
    await HomePage.scrollToPageFooter ();
    await expect ( await HomePage.getFooter ).toBeDisplayedInViewport ()
    // await browser.pause(10000)
  })

  it ("Check find elements df", async ()=> {
    await browser.url("https://the-internet.herokuapp.com/windows")
    await $("//a[text()='Click Here']").click ();
    await browser.switchWindow("New Window")
    await browser.pause(3000)
    await browser.switchWindow("The Internet")
    await browser.pause(3000)

  })
  it ("Check find elements df bb", async ()=> {
    await browser.url("https://the-internet.herokuapp.com/iframe")
    await browser.switchToFrame( 0)
    await $("#tinymce p").clearValue () 

    await $("#tinymce").setValue ("Write text")
    await browser.pause(5000)
// 
    await browser.switchToParentFrame ()

    await expect (await $(".example > h3")).toHaveText ("An iFrame containing the TinyMCE WYSIWYG Editor")

  })

  it ("Check find elemebnts df bb", async ()=> {
    await browser.url("https://the-internet.herokuapp.com/dropdown")
    await $("#dropdown").selectByVisibleText("Option 1")  
    await expect ($("//option[text()='Option 1']")).toBeSelected ()
  })

  it.only ("Check find elemebnts df bcb", async ()=> {
    var input = "Alert text from wdio" ;
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts")
    await $("//*[text()='Click for JS Prompt']").click()
    await browser.sendAlertText(input)
    await browser.acceptAlert () 
    await expect ($("#result")).toHaveText (`You entered: ${input}`)
  }) 
});
