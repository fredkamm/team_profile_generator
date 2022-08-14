const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employees');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateMarkdown = require('./src/generateHtml');


// manager prompt (needs to be displayed first)
const promptManager = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Name input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Employee-ID?',
        name: 'id',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Employee-id input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Email input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Office number input is required'
            }
        },
    },
]
// Add input to the manager class and call next prompt


// prompt that will be displayed after the manager prompt
const promptAdd = [
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Do you want to add more employees?',
        choices: ['Engineer', 'Intern', 'No']
    }
]

// engineer prompt
const promptEngineer = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Name input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Employee-ID?',
        name: 'id',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Employee-id input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Email input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'GitHub username input is required'
            }
        },
    },
]

// intern prompt
const promptIntern = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Name input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Employee-ID?',
        name: 'id',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Employee-id input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'Email input is required'
            }
        },
    },
    {
        type: 'input',
        message: 'What school do you attend?',
        name: 'school',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'School input is required'
            }
        },
    },
]

function writeToFile(response) {
    
    const pageContent = generateMarkdown(response);
    fs.writeFile('./dist/index.html', pageContent, (err) => {
        if (err === true) {
            console.log('error');
        }
    })

}

// this function runs beginning prompt
function init() {
    console.log('Build your team!');
    inquirer.prompt(promptManager)
        .then((response) => {
            console.log(response);
            inquirer.prompt(promptAdd);

            const pageContent = generateMarkdown(response);
            writeToFile(response)
        })

}
init()

// // GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated