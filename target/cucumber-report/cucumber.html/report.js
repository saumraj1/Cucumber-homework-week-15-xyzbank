$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bankmanager.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Manager Feature",
  "description": "As a user I want to add customer and open a account",
  "id": "bank-manager-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5390128900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User as a bank manager should able to add customer successfully",
  "description": "",
  "id": "bank-manager-feature;user-as-a-bank-manager-should-able-to-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter First name \"Nidhi\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Last Name \"Patel\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Postcode \"HA3 3NG\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am able to see popup display with \"Customer added successfully \" message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 474560100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 72474100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 271939600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nidhi",
      "offset": 20
    }
  ],
  "location": "BankManagerSteps.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 410694800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankManagerSteps.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 74036400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA3 3NG",
      "offset": 18
    }
  ],
  "location": "BankManagerSteps.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 84536100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 131953800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully ",
      "offset": 37
    }
  ],
  "location": "BankManagerSteps.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 11606900,
  "status": "passed"
});
formatter.after({
  "duration": 659665400,
  "status": "passed"
});
formatter.before({
  "duration": 3076885800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User as a bank manager should able to open account successfully",
  "description": "",
  "id": "bank-manager-feature;user-as-a-bank-manager-should-able-to-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select \"Harry Potter\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I am able to see popup display with this \"Account created successfully \" message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 586096800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 50687000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 293004600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 10
    }
  ],
  "location": "BankManagerSteps.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 341769100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankManagerSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 93171600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnProcessButton()"
});
formatter.result({
  "duration": 52734400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully ",
      "offset": 42
    }
  ],
  "location": "BankManagerSteps.iAmAbleToSeePopupDisplayWithThisMessage(String)"
});
formatter.result({
  "duration": 7269200,
  "status": "passed"
});
formatter.after({
  "duration": 639452700,
  "status": "passed"
});
formatter.before({
  "duration": 2965561600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to login into the account logout fro the account successfully",
  "description": "",
  "id": "bank-manager-feature;user-should-be-able-to-login-into-the-account-logout-fro-the-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    },
    {
      "line": 22,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Harry Potter\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should be able able to verify customer name \"Harry Potter\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should able to click logout button",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 501238000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 42030500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 10
    }
  ],
  "location": "BankManagerSteps.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 322041800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 49842400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 47
    }
  ],
  "location": "BankManagerSteps.iShouldBeAbleAbleToVerifyCustomerName(String)"
});
formatter.result({
  "duration": 272957000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iShouldAbleToClickLogoutButton()"
});
formatter.result({
  "duration": 45124800,
  "status": "passed"
});
formatter.after({
  "duration": 626623900,
  "status": "passed"
});
formatter.before({
  "duration": 3219247500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User as customer should be able to to deposit money to the account",
  "description": "",
  "id": "bank-manager-feature;user-as-customer-should-be-able-to-to-deposit-money-to-the-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@sanity"
    },
    {
      "line": 30,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select \"Harry Potter\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 499058100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 37482600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 10
    }
  ],
  "location": "BankManagerSteps.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 323197500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 42730600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnDepositTab()"
});
formatter.result({
  "duration": 292819400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "BankManagerSteps.iEnterAmount(String)"
});
formatter.result({
  "duration": 327063600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 45318200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankManagerSteps.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 28775000,
  "status": "passed"
});
formatter.after({
  "duration": 634991000,
  "status": "passed"
});
formatter.before({
  "duration": 3139630400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User as a customer should be able to withdraw money successfully",
  "description": "",
  "id": "bank-manager-feature;user-as-a-customer-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select \"Harry Potter\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter amount \"500\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I click on Withdraw tab",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I enter amount \"50\" in amount to be withdrawn field",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click Withdraw tab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should able to verify withdrawn message \"Transaction successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 453613600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 32939900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 10
    }
  ],
  "location": "BankManagerSteps.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 337747700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 46339100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnDepositTab()"
});
formatter.result({
  "duration": 313836800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 16
    }
  ],
  "location": "BankManagerSteps.iEnterAmount(String)"
});
formatter.result({
  "duration": 310855300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 47249400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankManagerSteps.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 27496300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnWithdrawTab()"
});
formatter.result({
  "duration": 45384800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    }
  ],
  "location": "BankManagerSteps.iEnterAmountInAmountToBeWithdrawnField(String)"
});
formatter.result({
  "duration": 34837800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickWithdrawTab()"
});
formatter.result({
  "duration": 30570100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 43
    }
  ],
  "location": "BankManagerSteps.iShouldAbleToVerifyWithdrawnMessage(String)"
});
formatter.result({
  "duration": 40133808800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Transaction successful\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [01f5abbfb68f8172c63efe9015f010a3, findElement {using\u003dxpath, value\u003d//span[contains(text(),\u0027Transaction successful\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58411}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58411/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 01f5abbfb68f8172c63efe9015f010a3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.xyzbank.pages.AccountPage.gettingWithdrawConfirmationText(AccountPage.java:110)\r\n\tat com.xyzbank.cucumber.steps.BankManagerSteps.iShouldAbleToVerifyWithdrawnMessage(BankManagerSteps.java:149)\r\n\tat ✽.Then I should able to verify withdrawn message \"Transaction successful\"(bankmanager.feature:53)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1077846200,
  "status": "passed"
});
});