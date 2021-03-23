package runnerTest.webPages;

import Utils.BasePage;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.function.Function;

public class ElementUtil {

    /**
     * Fluentwait method which is used for elements
     * @param locator
     * @return
     */
    public static WebElement webAction(final By locator) {
        Wait<WebDriver> wait = new FluentWait<WebDriver>(BasePage.get())
                .withTimeout(Duration.ofSeconds(15))
                .pollingEvery(Duration.ofSeconds(1))
                .ignoring(NoSuchElementException.class)
                .ignoring(StaleElementReferenceException.class)
                .ignoring(ElementClickInterceptedException.class)
                .withMessage(
                        "Webdriver waited for 15 seconds not still could not find the element" +
                                "therefore TimeOutException has been thrown"
                );
        return wait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                return  driver.findElement(locator);
            }
        });
    }

    /**
     * Click on method
     * @param locator
     */
    public void clickOn(By locator) {
        webAction(locator).click();
    }

    /**
     * Send key method
     * @param locator
     * @param value
     */
    public void sendValue(By locator, String value) {
        webAction(locator).sendKeys(value);
    }

    /**
     * Get text method
     * @param locator
     * @return
     */
    public String getTextFromElement(By locator) {
        return webAction(locator).getText();
    }

    /**
     * Clear method
     * @param locator
     */
    public void clear(By locator) {
        webAction(locator).clear();
    }

    /**
     * isDisplayed Method
     * @param locator
     * @return
     */
    public boolean isElementDisplayed(By locator) {
        return webAction(locator).isDisplayed();
    }

    /**
     * isSelected Method
     * @param locator
     * @return
     */
    public boolean isElementSelected(By locator) {
        return webAction(locator).isSelected();
    }

    /**
     * isEnabled Method
     * @param locator
     * @return
     */
    public boolean isElementEnabled(By locator) {
        return  webAction(locator).isEnabled();
    }

    /**
     * Find Elements Method
     * @param locator
     * @return
     */
    public List<WebElement> webelements(By locator) {
        return BasePage.get().findElements(locator);
    }

    /**
     * Drop Down Method with Text
     * @param locator
     * @param dropDownText
     */
    public void selectFromDropDownText(By locator, String dropDownText) {
        WebElement element = webAction(locator);
        Select selectText = new Select(element);
        selectText.selectByVisibleText(dropDownText);
    }

    /**
     * Drop Down Method with Index
     * @param locator
     * @param dropDownIndex
     */
    public void selectFromDropDownIndex(By locator, int dropDownIndex) {
        WebElement element = webAction(locator);
        Select selectText = new Select(element);
        selectText.selectByIndex(dropDownIndex);
    }

    /**
     * Scroll Down by Element
     * @param locator
     */
    public void scrollByElement(By locator) {
        WebElement scrollElement = webAction(locator);
        JavascriptExecutor js = (JavascriptExecutor) BasePage.get();
        js.executeScript("argument[0].scrollIntoView;", scrollElement);
    }

    /**
     * Scroll Down by Pixel
     * @param xPixel
     * @param yPixel
     */
    public void scrollByPixel(String xPixel, String yPixel) {
        String str = "window.scroll(" + xPixel + ", " + yPixel + ")";
        JavascriptExecutor js = (JavascriptExecutor) BasePage.get();
        js.executeScript(str);
    }

    /**
     * Move to Element
     * @param locator
     */
    public void moveToElement(By locator) {
        Actions actions = new Actions(BasePage.get());
        actions.moveToElement(webAction(locator)).build().perform();
    }

    /**
     * Get Screenshot If your test cases failed
     * @param name
     * @return
     */
    public String getScreenShot(String name) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("-yyyy-MM-dd-HH-mm");
        String date = dateFormat.format(new Date());
        TakesScreenshot takesScreenshot = (TakesScreenshot) BasePage.get();
        File source = takesScreenshot.getScreenshotAs(OutputType.FILE);
        String target = System.getProperty("user.dir") + "/test-output/Screenshots/" + name + date + ".png";
        File finalDestination = new File(target);
        try {
            FileUtils.copyFile(source, finalDestination);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return target;
    }

}
