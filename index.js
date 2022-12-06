"use strict";

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const employees = [];

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager name?",
        default: "Colin",
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
          createStylesheet();
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
        default: "Engineer",
      },
      {
        type: "input",
        name: "id",
        message: "What is the their employee ID?",
        default: "2",
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
        default: "CascadeColin",
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
        default: "Colin",
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
        default: "Engineer",
      },
      {
        type: "input",
        name: "id",
        message: "What is the their employee ID?",
        default: "2",
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
          createStylesheet();
          createHtml();
          break;
      }
    });
};

const createStylesheet = (fileName, data) => {
    inquirer.prompt([{
        type: "input",
        name: "filename",
        message: "Enter a filename for your CSS file:",
        default: "styles",
    }])
    .then((response) => {
        // FIXME: started class in the middle of writing this function
        const filename = `${response.fileName}.css`
        fs.writeFile(filename, data, (err) => err ? console.error(err) : console.log("CSS!"));
    })

};

const createHtml = () => {
  console.log("this is when the HTML will be rendered");
  // renderHtmlCards() to dynamically create HTML cards from employees[]
  console.log(employees);
};

const addEmployeeSucceeded = (employeeType) => {
  console.log(`\n${employeeType} added successfully!\n`);
};

const renderHtmlCards = () => {
  // employees.forEach() => generate new HTML card
};

init();
