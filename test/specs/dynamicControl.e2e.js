const { assert } = require("chai");
const DynamicLoadingPage = require("../pageobjects/dynamicLoading.page");

describe("My Dynamic loading application", () => {

  var textInInputField = "Write test";

  it("should wait to input field to be enabled", async () => {
    await DynamicLoadingPage.open();
    await expect(DynamicLoadingPage.enableInput).toBeDisabled()
    await DynamicLoadingPage.enableInputField (textInInputField)
    await expect(DynamicLoadingPage.enableInput).toBeEnabled()
    await expect(DynamicLoadingPage.enableInput).toHaveValue(textInInputField)
    // await assert.equal((DynamicLoadingPage.enableInput).isEnabled(), true)
  });

  it("should wait to input field to be disabled", async () => {
    await DynamicLoadingPage.disableInputField ()
    await expect(DynamicLoadingPage.enableInput).toBeDisabled()
    await expect(DynamicLoadingPage.enableInput).toHaveValue(textInInputField)
  });
});
