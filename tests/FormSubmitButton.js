const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

const TestData = {
     firstName: 'Test',
     lastName: 'Test',
     email: 'test@gmail.com',
     phoneNumber: '5555555555'
}
 
async function FormSubmitButton(){
 
     let driver = await new Builder().forBrowser("chrome").build();
    
     await driver.get("https://demoqa.com/");
         
     await driver.findElement(By.xpath("(//*[@class='card-up'])[2]")).click();
     await driver.sleep(1000);

     
     await driver.findElement(By.xpath("(//span[@class='text'])[10]")).click();
     await driver.findElement(By.id("firstName")).sendKeys(TestData.firstName);
     await driver.findElement(By.id("lastName")).sendKeys(TestData.lastName);
     await driver.findElement(By.id("userEmail")).sendKeys(TestData.email);
     await driver.findElement(By.xpath("(//div[@class ='custom-control custom-radio custom-control-inline']/label[@class='custom-control-label'])[1]")).click();
     await driver.findElement(By.id("userNumber")).sendKeys(TestData.phoneNumber);

     
     await driver.executeScript("window.scrollBy(0,400)");
     await driver.sleep(1000);

     //click submit button
     await driver.findElement(By.id("submit")).click();
     console.log("clicked to submit button")
     
     submissionSuccessText = await driver.findElement(By.id('example-modal-sizes-title-lg')).getText();
     console.log(submissionSuccessText);


     await driver.findElement(By.xpath("//button[@id='closeLargeModal']")).click();
     console.log("clicked to close button")
     
     await driver.quit();
}

FormSubmitButton()