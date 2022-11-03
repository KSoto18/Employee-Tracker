//Modules
const inquirer = require('inquirer');

//MySQL Connection Module
const db = require('./main/db/connection');


function userOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Select an option: ',
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Emplpoyee Role'
            ]
        }
    ])
        .then(function (selection) {
            switch (selection.options) {
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
            }
        })
}

// Starts Apllication
setUp();

function setUp() {
     userOptions();
   }



// function departments() {}

// function roles() {}

// function employees() {}

// function addDepartments() {}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "Employee's first name:"

        },
        {
            type: 'input',
            name: 'last_name',
            message: "Employee's last name:"
        },
        {
            type: 'number',
            name: 'role_id',
            message: "Role ID:",
            
        },
        {
            type: 'number',
            name: 'manager_id',
            message: "Employee's Manager's ID: "
        }
    ])
        .then(function (answers) {
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
                [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
                function (err, data) {
                    if (err) throw err;
                    console.info(`New Employee added!`);
                    
                    db.query('SELECT * FROM employee', function (err, answers) {
                        if (err) throw err;
                        console.table(answers);
                        setUp();
         }) 
    });
 });
}


// function updateEmployee() {}

