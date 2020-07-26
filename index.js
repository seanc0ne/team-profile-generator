const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArr = [];

const initialQuestion = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee?',
            name: 'employeeType',
            choices: [Manager, Engineer, Intern]
        },
    ])
        .then(answer => {

            if (answer.employeeType === 'Manager') {
                managerQuestions();
            } else if
                (answer.employeeType === 'Engineer') {
                engineerQuestions();
            } else if
                (answer.employeeType === 'Intern') {
                internQuestions();
            }
            else {
                console.log('Done.');
                return;
            }
        })
}

initialQuestion();

const internQuestions = () => {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'What is the intern\'s employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the intern\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the intern\'s school?',
            name: 'school',
        },
        {
            type: 'confirm',
            message: 'Would you like to enter another employee?',
            name: 'addCheck',
        },

    ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.id, answers.email, answers.school);
            employeeArr.push(intern);

            console.log(employeeArr);

            if (answers.addCheck) {
                initialQuestion();
            } else {
                let data = render(employeeArr);
                fs.writeFile(distPath, data, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved.');
                });
            }
        })
}

const engineerQuestions = () => {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is engineer\'s employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s GitHub username?',
            name: 'github',
        },
        {
            type: 'confirm',
            message: 'Would you like to enter another employee?',
            name: 'addCheck',
        },

    ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.github);
            employeeArr.push(engineer);

            console.log(employeeArr);

            if (answers.addCheck) {
                initialQuestion();
            } else {
                let data = render(employeeArr);
                fs.writeFile(distPath, data, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved.');
                });
            }
        })
}

const managerQuestions = () => {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is the manager\'s name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is the manager\'s ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the manager\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name: 'officeNumber',
        },
        {
            type: 'confirm',
            message: 'Would you like to enter another employee?',
            name: 'addCheck',
        },

    ])
        .then(answers => {

            const manager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber);
            employeeArr.push(manager);

            console.log(employeeArr);

            if (answers.addCheck) {
                initialQuestion();
            } else {
                let data = render(employeeArr);
                fs.writeFile(distPath, data, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved.');
                });
            }
        })
}