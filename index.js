// Required node packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");


// Required classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/generateHTML");
const generateHTML = require("./lib/generateHTML");
const { Console } = require("console");

// Questions array for all employees
let employeesArr = [];

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee have?",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

// Questions for manager role
managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        validate: officeNumber =>
        {
            if (officeNumber)
            {
                return true;
            } else
            {
                console.log("Please enter an office number!");
                return false;
            }
        }
    }
]

// Questions for engineer role
engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's Github Username? (Required)",
        validate: github =>
        {
            if (github)
            {
                return true;
            } else
            {
                console.log("Please enter a GitHub username!");
                return false;
            }
        }
    }
]

// Questions for intern role
internQuestions = [

    {
        type: "input",
        name: "school",
        message: "What school is the intern from? (Required)",
        validate: school =>
        {
            if (school)
            {
                return true;
            } else
            {
                console.log("Please enter a school name!");
                return false;
            }
        }
    }
]

// Function to initialize the application
function init()
{
    newEmployee()
}

// Function to create new employees
function newEmployee()
{
    inquirer.prompt(questions).then(async (response) =>
    {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let role = response.role;
        let officeNumber;
        let github;
        let school;

        if (role === "Engineer")
        {
            await inquirer.prompt(engineerQuestions).then((response) =>
            {
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employeesArr.push(employee);
            });
        }
        else if (role === "Manager")
        {
            await inquirer.prompt(managerQuestions).then((response) =>
            {
                officeNumber = response.officeNumber;
                let employee = new Manager(name, id, email, officeNumber);
                employeesArr.push(employee);
            });
        }
        else if (role === "Intern")
        {
            await inquirer.prompt(internQuestions).then((response) =>
            {
                school = response.school;
                let employee = new Intern(name, id, email, school);
                employeesArr.push(employee);
            });
        }
        nextEmployee()

    }
    )
};

// Function to check if you would like to add an employee. 
// When you finish and enter no, it will generate the index.html file

function nextEmployee()
{
    inquirer.prompt({
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add an employee? (Required)"

    }).then((response) =>
    {
        let createEmployee = response.addEmployee;
        if (createEmployee === true)
        {
            newEmployee();
        }
        else if (createEmployee === false)
        {
            // console.log(employeesArr)
            console.log("Your team profile has been successfully created! Please check out the index.html at the dist folder")
            fs.writeFile("./dist/index.html", generateHTML(employeesArr), err =>
            {
                if (err)
                {
                    console.log(err)
                }
            })

        }
    })
};
// Function call to initialize app
init();