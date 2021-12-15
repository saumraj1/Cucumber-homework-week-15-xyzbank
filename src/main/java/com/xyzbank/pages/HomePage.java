package com.xyzbank.pages;

import com.xyzbank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Customer Login')]")
    WebElement _customerLoginLink;

    @FindBy(xpath = "//button[contains(text(),'Bank Manager Login')]")
    WebElement _bankManagerLoginLink;
    @FindBy(xpath = "//button[contains(text(),'Add Customer')]")
    WebElement addCustomerTab;
    @FindBy(xpath = "//button[contains(text(),'Open Account')]")
    WebElement openAccountTab;

    @FindBy(xpath = "//button[contains(text(),'Customers')]")
    WebElement customersTab;
    @FindBy(xpath = "//button[@class='btn home']")
    WebElement _homeButton;

    public void clickOnCustomerLoginLink() {
        clickOnElement(_customerLoginLink);
    }
    public void clickOnAddCustomerTab(){
        Reporter.log("Clicking On Add Customer Tab :" +addCustomerTab.toString() + "<br>");
        clickOnElement(addCustomerTab);
         log.info("Clicking On Add Customer Tab :" +addCustomerTab.toString());
    }
    public void clickOnOpenAccountTab(){
        clickOnElement(openAccountTab);
          log.info("Clicking On Open Account Tab :" +openAccountTab.toString());
    }
    public void clickOnCustomerTab(){
        clickOnElement(customersTab);
         log.info("Clicking On Customer Tab :" +customersTab.toString());
    }
    public void clickOnBankManagerLoginLink() {
        waitForElementWithFluentWait(_bankManagerLoginLink, 60, 2);
        clickOnElement(_bankManagerLoginLink);
        log.info("Clicking on login link: " + _bankManagerLoginLink.toString());
    }

    public void clickOnHomeButton() {
//        Reporter.addStepLog(" Clicking on Home Button " + _homeButton.toString() + "<br>");
        clickOnElement(_homeButton);
        log.info(" Clicking on Home Button " + _homeButton.toString());
    }

}
