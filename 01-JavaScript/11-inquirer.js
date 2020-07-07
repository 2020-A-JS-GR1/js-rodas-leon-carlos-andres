const inquirer = require('inquirer');

// npm install inquirer
async function main() {
    const respuesta = inquirer
        .prompt([
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa tu nombre'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu edad'
            },
        ])
}

main();