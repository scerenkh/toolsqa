# ToolQA

In this project, with node you can run your test locally or after preparation of Jenkins you can run on CI/CD pipeline.
The cases in the project involve that we can use most common steps in test. My approach is step by step.

## How to run the tests locally?
- Make sure the node is installed
- Open project.
- Run this on the terminal.
`npm install --save selenium-webdriver chromedriver geckodriver`
- Go to the "/tests" file on the terminal.
- The test file to be run is run with the node command.
`example: node Alert.js`
## How to run tests in CI/CD pipeline
- Install "brew"

  `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

- Run the in terminal 
  ```
  brew install jenkins
  brew services start jenkins
  ```
- Open on browser "localhost:8080"
- Go to the given link on browser and get admin pass and enter the password on the screen.
- Select install plugins.
- The packages needed are selected. - node.js — can be selected later.
- Go to _Manage Jenkins > Manage Nodes and Clouds -> Build in Node_ 
- In "Build in Node", choose "Configure"
- In "Node Properties", click on the "Environment variables", then in name field should be `PATH` and value should be `/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin` , click to "Save" 
- Create a "New Item" from Dasboard and create "Freestyle" project
- Open project that you created before and click to "Configure"
- In Source Management field, choose git and add repository 
  “https://github.com/scerenkh/tools.git”
- In Build Triggers field, choose “Pool SCM” and add “H/3 * * * *”
- In Build field, add command script then save 
  ```
  cd tests
  node MainPage.js
  node Element.js
  node AlertPage.js
  node FormSubmitButton.js
  ```
 - After all these steps, jenkins is ready to run your tests. When you click on the "Build", your tests should be started by Jenkins automatically.

