// initialized my npm's
const inquirer = require('inquirer');
const fs = require('fs');
// started by creating the prompts needed via the inquirer npm
//Prompt the user questions to populate the README.md
inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation process: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What will your project be used for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Academic",
            "Apache",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who has contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How do I test your project?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have any questions? "
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? "
    },
    {
        type: "input",
        name: "email",
        message: "What is your email? "
    }
])