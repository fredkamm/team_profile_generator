const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employees');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateMarkdown = require('./src/generateHtml');

const team = [];


// manager prompt (needs to be displayed first)
const promptManager = () => {
    console.log('Lets build your team!');
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Managers name?',
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
            message: 'What is your Mangers Employee-ID?',
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
            message: 'What is your Managers Email address?',
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
            message: 'What is your Managers office number?',
            name: 'officeNumber',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Office number input is required'
                }
            },
        },
    ]).then(manResponse => {
        console.log(manResponse);
        const manager = new Manager(manResponse.name, manResponse.id, manResponse.email, manResponse.officeNumber);
        team.push(manager)
        promptAdd();
    })
};


// prompt to add employees that will be displayed after the manager prompt
const promptAdd = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Do you want to add more employees?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ]).then(choice => {
        if (choice.addEmployee === 'Engineer') {
            return promptEngineer();
        } if (choice.addEmployee === 'Intern') {
            return promptIntern();
        } if (choice.addEmployee === 'No')
            return console.log('Your team is set!');
            writeToFile(response);
    })
}

// engineer prompt
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineers name?',
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
            message: 'What is the Engineers Employee-ID?',
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
            message: 'What is the Engineers Email address?',
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
            message: 'What is the Engineers Github username?',
            name: 'github',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'GitHub username input is required'
                }
            },
        },
    ]).then(engResponse => {
        const engineer = new Engineer(engResponse.name, engResponse.id, engResponse.email, engResponse.github);
        team.push(engineer);
        promptAdd();
    })
}

// intern prompt
const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
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
            message: 'What is the interns Employee-ID?',
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
            message: 'What is the interns Email address?',
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
            message: 'What school does the intern attend?',
            name: 'school',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'School input is required'
                }
            },
        },
    ]).then(intResponse => {
        const intern = new Intern(intResponse.name, intResponse.id, intResponse.email, intResponse.school);
        promptAdd();
    })
}

function writeToFile(team) {

    const pageContent = generateMarkdown(team);
    fs.writeFile('./dist/index.html', pageContent, (err) => {
        if (err === true) {
            console.log('error');
        }
    })

}

promptManager();

// this function runs beginning prompt
// function init() {
//     console.log('Build your team!');
//     inquirer.prompt(promptManager)
//         .then((response) => {
//             promptAdd();
//             writeToFile(response)
//         })
// }
// init()

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