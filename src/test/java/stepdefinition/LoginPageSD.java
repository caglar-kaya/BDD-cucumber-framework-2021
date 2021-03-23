package stepdefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.LoginPage;

public class LoginPageSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am on login page$")
    public void verifyLoginPage() {
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://opensource-demo.orangehrmlive.com/index.php/");
    }

    @When("^I enter (.+) into (username|password) text fields on login screen$")
    public void enterUsernameAndPassword (String value, String anyInputField) {
        switch (anyInputField) {
            case "username":
                loginPage.enterEmail(value);
                break;
            case "password":
                loginPage.enterPassword(value);
        }
    }

    @And("^I click on login button on login screen$")
    public void clickOnLoginBtn() {
        loginPage.clickOnLogInButton();
    }

    @Then("^I verify that I am invalid login page$")
    public void verifyLoginErrorMessage() {
        Assert.assertEquals(loginPage.getErrorMessage(), "Invalid credentials");
    }

}
