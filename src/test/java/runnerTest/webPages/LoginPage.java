package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil {

    private By usernameField = By.id("txtUsername");
    private  By passwordField = By.id("txtPassword");
    private By loginButton = By.id("btnLogin");
    private By errorMessage = By.id("spanMessage");

    public void enterEmail(String email) {
        sendValue(usernameField, email);
    }

    public void enterPassword(String password) {
        sendValue(passwordField, password);
    }

    public void clickOnLogInButton() {
        clickOn(loginButton);
    }

    public String getErrorMessage() {
        return getTextFromElement(errorMessage);
    }



}












