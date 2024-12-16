# Tech Quize

## Overview

Tech Quiz application provides users with multiple-choice questions (MCQs) about various technical topics like programming, computer science, web development, etc. Users can select their answers, and at the end of the quiz, they will receive their score

## Functionality 
- Start Quiz : When user clicks the start button then 10 questions are get populated. user need to answers the questions. when quize is over user can view his score.
- Cypress is used to write the tests. There are two types of tests 1. Component Testing 2. End-to-End (E2E) Testing.
- Component-level tests are added for the Quiz component in the file cypress/component/Quiz.cy.jsx. 
- End-to-end tests are added in cypress/e2e/quiz.cy.js.

## Installation

To run this application on your local

- Clone a repository 
  ```sh
      git clone git@github.com:sheetalmangate/tech-quize.git
  ```

- Navigate to your project directory and run the command below, which will install all required dependencies. 
  ```sh
      npm install
  ```

- Create .env file and add database credentials
  ```sh
        MONGODB_URI = URL to access mongodb database
  ```

- To run the Tech Quiz use the command below in the command prompt
```
    npm run start
```

- To run the test cases for Tech Quiz use the command below in the command prompt
```
    npm run test
```

## Walk-through Video     
 For the demonstration of application's functionality view the walk trough video 
 [Tech Quiz App](https://app.screencastify.com/v3/watch/sNlQ0JH53yxWq6ruwWiI)


## Contributing
Contributions and PR's are welcome.

- Feel free to check [issues page](https://github.com/sheetalmangate/tech-quize/issues) if you want to contribute.
- Open a Pull Request 
    <p>Navigate to the original repository and click on "New Pull Request". Describe your changes and submit the pull request.</p>

## Questions
  For any question please reach out!

  - **Email** : [sheetal.mangate@gmail.com](sheetal.mangate@gmail.com)
  - **GitHub** : [sheetal](https://github.com/sheetalmangate) 

Thank you for your interest and feedback! 
