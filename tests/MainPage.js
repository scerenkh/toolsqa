const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function MainPageUrl() {

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();

    cards = await driver.findElements(By.xpath("//div[@class='card mt-4 top-card']"))

    for (let i = 1; i < cards.length+1; i++) {
        await driver.findElement(By.xpath("(//*[@class='card-up'])[" + i + "]")).click();
        currentURL = await driver.getCurrentUrl();
        console.log(currentURL);
        await driver.navigate().to("https://demoqa.com/");  
        
    }
    await driver.quit();
}

MainPageUrl()