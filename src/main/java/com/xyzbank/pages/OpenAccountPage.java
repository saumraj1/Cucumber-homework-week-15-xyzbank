package com.xyzbank.pages;

import com.xyzbank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class OpenAccountPage extends Utility
{

    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());

    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement _searchCustomerField;

    @FindBy(xpath = "//select[@id='currency']")
    WebElement _searchCurrencyPound;

    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement _processBtn;

    public void enterCustomerThatCreatedInFirstTest(String cname) {
//        Reporter.addStepLog(" Enter name on customer name field " + _searchCustomerField.toString());
//        clickOnElement(_searchCustomerField);
        selectByVisibleTextFromDropDown(_searchCustomerField,cname);
        log.info(" Enter name on customer name field " + _searchCustomerField.toString());
    }

    public void clickOnSearchCurrencyField(String currncy) {
//        Reporter.addStepLog(" clicking on Pound currency field" + _searchCurrencyPound.toString());
        selectByVisibleTextFromDropDown(_searchCurrencyPound,currncy);
        log.info(" clicking on Pound currency field" + _searchCurrencyPound.toString());
    }

    public void clickOnProcessButton() {
//        Reporter.addStepLog("Clicking on process button" + _processBtn.toString());
        clickOnElement(_processBtn);
      /*  Alert alert = driver.switchTo().alert();
        String actualMessage = getTextFromAlert();
        String expectedMessage = "Account created successfully with account Number :";
//        Assert.assertTrue(str, actualMessage.contains(expectedMessage));
        alert.accept();*/
    }

}
