
const inquirer = require('inquirer');
var generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require('fs');


// array of questions for user
const questions = [
    {
        type: "type",
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: "type",
        name: 'description',
        message: 'Give a description of your application'
    },
    {
        type: "input",
        name: 'installation',
        message: 'How do you install your app?'
    },
    {
        type: "type",
        name: 'usage',
        message: 'WHat is the usage of your application?'
    },
    {
        type: "list",
        name: 'license',
        message: 'What license did you use?',
        choices: ["mit", "apple"]
    },
    {
        type: "input",
        name: 'contributing',
        message: 'Who contributed to your application?'
    },
    {
        type: "input",
        name: 'tests',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: "input",
        name: 'questions',
        message: 'What is your github username?'
    },
    {
        type: "input",
        name: 'email',
        message: 'What is your email?'
    }


];

// function to write README file
function writeToMyFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) console.log(err);
    });
}

// function to initialize program
 function init() {
        inquirer.prompt(questions).then(answers => {
        console.log(answers);
        const answersData = generateMarkdown(answers);
        writeToMyFile("README.md", answersData);
      
    });
}


// function call to initialize program
init();