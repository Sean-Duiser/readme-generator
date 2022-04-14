// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please provide information regarding your tests.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select a license for your application.',
        name: 'license',
        choices: [
            { name: 'Apache', value: 'apache' },
            { name: 'GNU', value: 'GNU' },
            { name: 'MIT', value: ' MIT' },
        ]
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then(data => {
            const readMeTemplate =
                generateMarkdown(data);
            fs.writeFile(fileName, readMeTemplate, (err) => {
                err ? console.error(err) : console.log('success!')
            });
        })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('./dist/README.md', questions);
}

// Function call to initialize app
init();
