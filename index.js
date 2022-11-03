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

// View all departments from the database
function departments() {
    const dataBase = 'SELECT * FROM department';
         db.query(dataBase, function (err, answers) {
            if (err) { 
                throw err;
            }

            console.table(answers);
            
         }
     )};

// View all roles from the database
function roles() {
        const dataBase = 'SELECT * FROM role';
             db.query(dataBase, function (err, answers) {
                if (err) { 
                    throw err;
                }
                
                console.table(answers);
                
             });
        }

// View all Employees from the database function
function employees() {
    const dataBase = 'SELECT * FROM employee';
             db.query(dataBase, function (err, answers) {
                if (err) { 
                    throw err;
                }
                
                console.table(answers);
               
             });
        }

// function addDepartments() {}

// Adds new employee to the employees table
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
                    if (err) { 
                     throw err;
                    }

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

