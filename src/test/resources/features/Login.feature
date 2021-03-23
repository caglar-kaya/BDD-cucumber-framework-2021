@web

  Feature: Login OrangeHRM page

    Background:
      Given I am on login page

      @login
      Scenario Outline: Verify invalid login for multiple users
        When  I enter <username> into username text fields on login screen
        When  I enter <password> into password text fields on login screen
        And I click on login button on login screen
        Then  I verify that I am invalid login page

        Examples:
        | username              | password   |
        | caglar@gmail.com      | test123    |
        | ahmetturk@hotmail.com | abc+987    |
        | support@mibgate.com   | qwerty753/ |

