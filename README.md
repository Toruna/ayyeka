## Code Structure

```
root
├── cypress/
│   ├── e2e/
|   |   ├── dataVisualizationFeature.cy.js
|   |   ├── signIn.cy.js
│   │   ├── signUp.cy.js
|   ├── support/
|   |   ├── DataVisualization
|   |   |   ├── dataVisualization_helpers.js
|   |   ├── Methods
|   |   |   ├── constants.js
|   |   |   ├── validators.js
|   |   ├── SignIn  
|   |   |   ├── selectors-signin.js
|   |   |   ├── signin-helpers.js
|   |   ├── SignUp
|   |   |   ├── selectors-signup.js
|   |   |   ├── signup-helpers.js
|   |   ├── commands.js
|   |   ├── e2e.js
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```
- `cypress/`: This directory contains the Cypress test files
   - `e2e/`: Contains test files
      - `dataVisualizationFeature.cy.js/`: Contains test cases on data visualization functionality
      - `signIn.cy.js/`: Contains test cases on sign in functionality
      - `signUp.cy.js/`: Contains test cases on sign up functionality
   - `support/`: Contains all config files
      - `DataVisualization`/: Contains test data and validation functions
        - `dataVisualization_helpers.js`/: Contains test data
      - `Methods`/: Contains test data and validation functions
         - `constants.js`/: Contains test data
         - `validators.js`/: Contains validation functions
      - `SignIn`/: Contains selectors and functions for sign in functionality
         - `selectors-signin.js`/: Contains selectors for tests on sign in
         - `signin-helpers.js`/: Contains functions for tests on sign in
      - `SignUp`/: Contains selectors and functions for sign up functionality
         - `selectors-signup.js`/: Contains selectors for tests on sign up
         - `signup-helpers.js`/: Contains functions for tests on sign up
- `node_modules/`: The npm packages and dependencies required for the project
- `cypress.config.js`: Cypress configuration file
- `.gitignore`: Contains files and directories that should not be committed
- `package.json`: The npm package file containing project dependencies and scripts

## How to Run

1. **Clone the repository**
```
git clone git@github.com:Toruna/ayyeka.git
cd Ayyeka
```
2. **Open Cypress**
```
npx cypress open
```

3. **Run a desired test file only by clicking on it**
