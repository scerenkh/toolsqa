const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

const TestData = {
    fullName: 'Test',
    email: 'test@gmail.com',
    currentAddress: 'Current Address Test',
    permanentAddress: 'Permanent Address Text'
}

const ExpectedData = {
    nameText: 'Name:Test',
    emailText: 'Email:test@gmail.com', 
    currentAddressText: 'Current Address :Current Address Test',
    permanentAddress: 'Permananet Address :Permanent Address Text'
}
 
async function ElementsButton(){
 
    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://demoqa.com/");
         
    await driver.findElement(By.xpath("(//*[@class='card-up'])[1]")).click();
    await driver.sleep(1000);


    await driver.findElement(By.xpath("(//span[@class='text'])[1]")).click();
    await driver.findElement(By.id("userName")).sendKeys(TestData.fullName);
    await driver.findElement(By.id("userEmail")).sendKeys(TestData.email);
    await driver.findElement(By.id("currentAddress")).sendKeys(TestData.currentAddress);
    await driver.findElement(By.id("permanentAddress")).sendKeys(TestData.permanentAddress);
    await driver.findElement(By.id("submit")).click();
    await driver.sleep(1000);
    console.log("Submit Button is clicked");

    await driver.executeScript("window.scrollBy(0,500)");
    await driver.sleep(1000);

    var nameField = await driver.findElement(By.id("name")).getText();
    var emailField = await driver.findElement(By.id("email")).getText();
    var currentAddressField = await driver.findElement(By.xpath("//div[@class='border col-md-12 col-sm-12']/p[@id='currentAddress']")).getText();
    var permanentAddressField = await driver.findElement(By.xpath("//div[@class='border col-md-12 col-sm-12']/p[@id='permanentAddress']")).getText();

    if (ExpectedData.nameText == nameField){
        console.log("Name field is same with data");
    } else {
        console.log("Name field is different with data")
    }

    if (ExpectedData.emailText == emailField){
        console.log("Email field is same with data");
    } else {
        console.log("Email field is different with data")
    }

    if (ExpectedData.currentAddressText == currentAddressField){
        console.log("Current Address field is same with data");
    } else {
        console.log("Current Address field is different with data")
    }

    if (ExpectedData.permanentAddress == permanentAddressField){
        console.log("Permanent Address field is same with data");
    } else {
        console.log("Permanent Address field is different with data")
    }

    await driver.quit();
}

ElementsButton()