Feature: Bank Manager Feature
As a user I want to add customer and open a account
  @smoke@regression
  Scenario: User as a bank manager should able to add customer successfully
    Given I am on home page
    When I click on Bank Manager login tab
    And I click on Add Customer tab
    And I enter First name "Nidhi" to First Name field
    And I enter Last Name "Patel" to Last Name Field
    And I enter Postcode "HA3 3NG" to Postcode Field
    And I click on Add customer button
    Then I am able to see popup display with "Customer added successfully " message
  @sanity@regression
  Scenario: User as a bank manager should able to open account successfully
    Given I am on home page
    When I click on Bank Manager login tab
    When I click on Open Account tab
    And I select "Harry Potter" customer name which added before
    And I select currency "Pound"
    And I click on Process button
    Then I am able to see popup display with this "Account created successfully " message
  @sanity@regression
  Scenario: User should be able to login into the account logout fro the account successfully
    Given I am on home page
    And I click on Customer Login button
    And I select "Harry Potter" customer name which added before
    And I click on login button
    And I should be able able to verify customer name "Harry Potter"
    And I should able to click logout button
  @sanity@regression
  Scenario: User as customer should be able to to deposit money to the account
    Given I am on home page
    And I click on Customer Login button
    And I select "Harry Potter" customer name which added before
    And I click on login button
    And I click on Deposit tab
    And I enter amount "100"
    And I click on Deposit button
    Then I should able to verify message "Deposit Successful"
  @regression
  Scenario: User as a customer should be able to withdraw money successfully
    Given I am on home page
    And I click on Customer Login button
    And I select "Harry Potter" customer name which added before
    And I click on login button
    And I click on Deposit tab
    And I enter amount "500"
    And I click on Deposit button
    Then I should able to verify message "Deposit Successful"
    When I click on Withdraw tab
    And I enter amount "50" in amount to be withdrawn field
    And I click Withdraw tab
    Then I should able to verify withdrawn message "Transaction successful"





