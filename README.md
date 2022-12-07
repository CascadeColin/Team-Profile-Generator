# Team Profile Generator

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)

## Table of Contents
  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Appendix](#appendix)
  
## Description

Team Profile Generator is your solution to quickly building webpages to describe your team!  This Node application takes user-generated input about managers, engineers, and interns and automatically generates a styled HTML webpage based upon the data it receives.  Engineers have their GitHub accounts linked to the page inside of their cards.  Interns have their school listed.  All employee types have links built in to their provided email so that they can be contacted directly.  Email addresses are passed through validation to make sure that they follow correct syntax per RFC 5322.  This validation does not ensure that the email address is valid.
  
## Installation
  
This app utilizes the Node runtime and runs on the command line.  Basic understanding of these concepts is required to utilize this app.
  
## Usage
  
Use your CLI to run the app with the command "node index.js".  From there, you will be prompted to enter information about the team's manager.  Once done, there will be a menu with the option to add an engineer, add an intern, or "all done" to finish building the team.  Upon selecting "all done", a HTML page will be generated in the "lib/" directory that is already linked to the provided stylesheet.  The app will reject email addresses that do not follow proper email syntax (i.e. "george@company.com") and will automatically replace it with "Invalid Email Submitted".

A video walkthrough of this app's functionality has been provided at:  
  
## Contributing
  
Contact Colin Marshall at cascade.colin@gmail.com for more information.
  
## Tests
  
You may test the app utilizing Jest.  Running tests on the employee classes can be done by entering "npm run test" in the CLI.
  
## License

This project is licensed under [MIT License](https://opensource.org/licenses/MIT) by CascadeColin, Copyright 2022.

## Questions

You can find me on GitHub at:  https://github.com/CascadeColin/

Have questions, comments, or want to learn more about me work?  Contact me directly at cascade.colin@gmail.com.
  
## Appendix

This README was created using [README Generator](https://github.com/CascadeColin/README-Generator) by Colin Marshall.  For more information, contact cascade.colin@gmail.com.