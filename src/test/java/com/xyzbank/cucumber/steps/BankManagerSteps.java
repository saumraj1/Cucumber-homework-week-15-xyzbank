package com.xyzbank.cucumber.steps;

import com.xyzbank.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Alert;
import org.testng.Assert;

import static com.xyzbank.drivermanager.ManageDriver.driver;

/**
 * By Nidhi Patel
 **/
public class BankManagerSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
        new HomePage().clickOnHomeButton();

    }

    @When("^I click on Bank Manager login tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankManagerLoginLink();
    }

    @And("^I click on Add Customer tab$")
    public void iClickOnAddCustomerTab() {
        new HomePage().clickOnAddCustomerTab();
    }

    @And("^I enter First name \"([^\"]*)\" to First Name field$")
    public void iEnterFirstNameToFirstNameField(String firstname) throws Throwable {
        new AddCustomerPage().enterFirstName(firstname);
    }

    @And("^I enter Last Name \"([^\"]*)\" to Last Name Field$")
    public void iEnterLastNameToLastNameField(String lastname) throws Throwable {
   new AddCustomerPage().enterLastName(lastname);
    }

    @And("^I enter Postcode \"([^\"]*)\" to Postcode Field$")
    public void iEnterPostcodeToPostcodeField(String postcode) throws Throwable {
        new AddCustomerPage().enterPostCode(postcode);
    }

    @And("^I click on Add customer button$")
    public void iClickOnAddCustomerButton() {
        new AddCustomerPage().clickOnAddCustomerButton();
    }

    @Then("^I am able to see popup display with \"([^\"]*)\" message$")
    public void iAmAbleToSeePopupDisplayWithMessage(String expected) throws Throwable {
        Alert alert = driver.switchTo().alert();
        Assert.assertTrue(alert.getText().contains(expected));
        alert.accept();
    }

    @When("^I click on Open Account tab$")
    public void iClickOnOpenAccountTab() {
        new HomePage().clickOnOpenAccountTab();
    }

    @And("^I select \"([^\"]*)\" customer name which added before$")
    public void iSelectCustomerNameWhichAddedBefore(String cname)  {
      new OpenAccountPage().enterCustomerThatCreatedInFirstTest(cname);
    }

    @And("^I select currency \"([^\"]*)\"$")
    public void iSelectCurrency(String pound)  {
      new OpenAccountPage().clickOnSearchCurrencyField(pound);
    }

    @And("^I click on Process button$")
    public void iClickOnProcessButton() {
        new OpenAccountPage().clickOnProcessButton();
    }


    @Then("^I am able to see popup display with this \"([^\"]*)\" message$")
    public void iAmAbleToSeePopupDisplayWithThisMessage(String expected)  {
        Alert alert = driver.switchTo().alert();
        Assert.assertTrue(alert.getText().contains(expected));
        alert.accept();
    }

    @And("^I click on Customer Login button$")
    public void iClickOnCustomerLoginButton() {
        new HomePage().clickOnCustomerLoginLink();

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().clickCustomerLoginButton();

    }

    @And("^I should be able able to verify customer name \"([^\"]*)\"$")
    public void iShouldBeAbleAbleToVerifyCustomerName(String expected)  {
       Assert.assertEquals(expected,new AccountPage().gettingCustomerNameText());
    }

    @And("^I should able to click logout button$")
    public void iShouldAbleToClickLogoutButton() {
        new AccountPage().clickOnLogOutButton();
    }

    @And("^I click on Deposit tab$")
    public void iClickOnDepositTab() {
        new AccountPage().clickDepositButton();
    }

    @And("^I enter amount \"([^\"]*)\"$")
    public void iEnterAmount(String amount)  {
        new AccountPage().inputAmountToBeDeposited(amount);
    }

    @And("^I click on Deposit button$")
    public void iClickOnDepositButton() {
        new AccountPage().clickDepositButtonAfterAmountEntered();
    }

    @Then("^I should able to verify message \"([^\"]*)\"$")
    public void iShouldAbleToVerifyMessage(String expectedMessage) {

    Assert.assertEquals(expectedMessage,new AccountPage().gettingDepositConfirmationText());
    }

    @When("^I click on Withdraw tab$")
    public void iClickOnWithdrawTab() {
        new AccountPage().clickWithdrawTab();
    }

    @And("^I enter amount \"([^\"]*)\" in amount to be withdrawn field$")
    public void iEnterAmountInAmountToBeWithdrawnField(String amount){
       new AccountPage().inputAmountToBeWithdrawn(amount);
    }

    @And("^I click Withdraw tab$")
    public void iClickWithdrawTab(){
        new AccountPage().clickWithdrawButtonAfterAmountEntered();

    }

    @Then("^I should able to verify withdrawn message \"([^\"]*)\"$")
    public void iShouldAbleToVerifyWithdrawnMessage(String expectedTransactionMessage) {
        Assert.assertEquals(expectedTransactionMessage,new AccountPage().gettingWithdrawConfirmationText());

    }
}
