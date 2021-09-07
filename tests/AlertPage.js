const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function AlertButtonPage() {
    
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://demoqa.com/");

    await driver.findElement(By.xpath("(//*[@class='card-up'])[3]")).click();
    await driver.sleep(1000);
    
    await driver.findElement(By.xpath("(//span[@class='text'])[12]")).click();

    try {

        await driver.findElement(By.id("alertButton")).click();
        await driver.sleep(1000);
        var alertText = await driver.switchTo().alert().getText();
        console.log(alertText);
        await driver.switchTo().alert().accept();
        await driver.sleep(1000);
        console.log("Allert button is closed");

    } catch (error) {
        console.log("There is a problem in your AllertButton case!");
    }

    try {
        await driver.findElement(By.id("timerAlertButton")).click();
        await driver.sleep(6000);
        var timeAlert = await driver.switchTo().alert().getText();
        console.log(timeAlert);
        await driver.switchTo().alert().accept();
        await driver.sleep(1000);
        console.log("Time alert button is closed");

    } catch (error) {
        console.log("There is a problem in your TimeAllertButton case!");
    }

    await driver.quit();
}

AlertButtonPage()