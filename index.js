const inquirer = require('inquirer');



const userOptions = () => {
    inquirer.prompt ([
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
                'Update an Emplpoyee Role'
             ]
            }
        ]
    )
}

