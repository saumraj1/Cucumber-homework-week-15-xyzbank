package com.xyzbank.pages;

import com.cucumber.listener.Reporter;
import com.xyzbank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;


public class AddCustomerPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement firstNameField;

    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement lastNameField;

    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement postCodeField;

    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement addCustomerbtn;

    public void enterFirstName(String firstName) {
        Reporter.addStepLog(" Enter first name " + firstName + " to the first name field" + firstNameField.toString());
        sendTextToElement(firstNameField, firstName);
        log.info(" Enter first name " + firstName + " to the first name field" + firstNameField.toString());
    }

    public void enterLastName(String lastName) {
        Reporter.addStepLog(" Enter last name " + lastName + " to the last name field" + lastNameField.toString());
        sendTextToElement(lastNameField, lastName);
        log.info(" Enter last name " + lastName + " to the last name field" + lastNameField.toString());
    }

    public void enterPostCode(String postCode) {
        Reporter.addStepLog(" Enter post code " + postCode + " to the post code field" + postCodeField.toString());
        sendTextToElement(postCodeField, postCode);
        log.info(" Enter post code " + postCode + " to the post code field" + postCodeField.toString());
    }

    public void clickOnAddCustomerButton() {
        Reporter.addStepLog(" Clicking on add customer button " + addCustomerbtn.toString());
        waitUntilElementToBeClickable(addCustomerbtn, 10);
        clickOnElement(addCustomerbtn);

    }
    public void clickOnAcceptAlert(){
        Alert alert = driver.switchTo().alert();
        Assert.assertTrue(alert.getText().contains("Customer added successfully "));
        alert.accept();
        log.info(" accept alert:" + alert.getText());

    }


}
