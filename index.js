//Modules
const inquirer = require('inquirer');

//MySQL Connection Module
const connection = require('./main/db/connection');



function userOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Select and option: ',
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Emplpoyee Role',
            ]
        }
    ])
    .then(function(selection) {
        switch(selection.options){
            case 'View all Departments':
                departments();
            break;
            case 'View all Roles':
                roles();
            break;
            case 'View all Employees':
                employees();
            break;
            case 'Add a Department':
                addDepartment();
            break;
            case 'Add an Employee':
                addEmployee();
            break;
            case 'Update an Emplpoyee Role':
                updateEmployee();
            break;

            default:
                ok();
        }
    })
}

userOptions();

// function departments() {}

// function roles() {}

// function employees() {}

// function addDepartments() {}

// function addEmployee() {}

// function updateEmployee() {}