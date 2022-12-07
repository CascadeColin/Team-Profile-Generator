"use strict";

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const { notStrictEqual } = require("assert");

const htmlBeforeCards = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body class="container">
    <header class="header">
      <h1>My Team</h1>
    </header>
    <div class="subcontainer">`;

const htmlAfterCards = `    </div>
    </body>
</html>`;

const employees = [];

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager name?",
        default: "Michael",
      },
      {
        type: "input",
        name: "id",
        message: "What is the their employee ID?",
        default: "1",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        default: "manager@email.com",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
        default: "1",
      },
      {
        type: "list",
        name: "buildTeam",
        message: "Would you like to add a team member?",
        choices: ["Engineer", "Intern", "Manager", "All Done"],
        default: "None",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(manager);
      addEmployeeSucceeded(manager.role);
      switch (`${response.buildTeam}`) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Manager":
          createManager();
          break;
        case "All Done":
          createHtml();
          break;
      }
    });
};

const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        default: "Kelly",
      },
      {
        type: "input",
        name: "id",
        message: "What is the their employee ID?",
        default: "1",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        default: "engineer@email.com",
      },
      {
        type: "input",
        name: "github",
        message: "What is their GitHub username?",
        default: "MyGithub",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(engineer);
      addEmployeeSucceeded(engineer.role);
      addTeamMember();
    });
};

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager name?",
        default: "Michael",
      },
      {
        type: "input",
        name: "id",
        message: "What is the their employee ID?",
        default: "1",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        default: "manager@email.com",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
        default: "1",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(manager);
      addEmployeeSucceeded(manager.role);
      addTeamMember();
    });
};

const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        default: "Megan",
      },
      {
        type: "input",
        name: "id",
        message: "What is the their employee ID?",
        default: "1",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        default: "intern@email.com",
      },
      {
        type: "input",
        name: "school",
        message: "What is their school?",
        default: "UW",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employees.push(intern);
      addEmployeeSucceeded(intern.role);
      addTeamMember();
    });
};

const addTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "buildTeam",
        message: "Would you like to add a team member?",
        choices: ["Engineer", "Intern", "Manager", "All Done"],
        default: "None",
      },
    ])
    .then((response) => {
      switch (`${response.buildTeam}`) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Manager":
          createManager();
          break;
        case "All Done":
          createHtml();
          break;
      }
    });
};

const createHtml = () => {
  const filename = `./dist/index.html`;
  const data = (`${htmlBeforeCards}\n${renderHtmlCards()}\n${htmlAfterCards}`);
  writeToFile(filename, data);
};

const addEmployeeSucceeded = (employeeType) => {
  console.log('\x1b[34m%s\x1b[0m', `\n${employeeType} added successfully!\n`);
};

const renderHtmlCards = () => {
  let html = ``;
  employees.forEach((employee) => {
    switch(employee.role) {
      case "Manager":
        const managerCard = `      <section class="card">
        <div class="cardHeader">
          <h2 class="cardHeaderInfo">${employee.name}</h2>
          <h3 class="cardHeaderInfo">${employee.role}</h3>
        </div>
        <div class="cardBottom">
          <p class="cardInfo">ID: ${employee.id}</p>
          <p class="cardInfo">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
          <p class="cardInfo">Office Number: ${employee.officeNumber}</p>
        </div>
      </section>
      `;
        html = html.concat(managerCard);
        break;
      case "Engineer":
        const engineerCard = `      <section class="card">
        <div class="cardHeader">
          <h2 class="cardHeaderInfo">${employee.name}</h2>
          <h3 class="cardHeaderInfo">${employee.role}</h3>
        </div>
        <div class="cardBottom">
          <p class="cardInfo">ID: ${employee.id}</p>
          <p class="cardInfo">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
          <p class="cardInfo">GitHub: <a href="https://github.com/${employee.github}">${employee.github}</p></a>
        </div>
      </section>
      `;
        html = html.concat(engineerCard);
        break;
      case "Intern":
        const internCard = `      <section class="card">
        <div class="cardHeader">
          <h2 class="cardHeaderInfo">${employee.name}</h2>
          <h3 class="cardHeaderInfo">${employee.role}</h3>
        </div>
        <div class="cardBottom">
          <p class="cardInfo">ID: ${employee.id}</p>
          <p class="cardInfo">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
          <p class="cardInfo">School: ${employee.school}</p>
        </div>
      </section>
      `;
        html = html.concat(internCard);
        break;
    }
  })
  return html;
};

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log("\x1b[34m%s\x1b[0m", "\nYour HTML page is ready!"));
}

init();
