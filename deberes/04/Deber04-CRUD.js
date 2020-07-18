const inquirer = require('inquirer');
const fs = require('fs');

const file = './game-category.txt';
let validator = true;

const promiseOptions = () => {
    return inquirer
        .prompt({
            type: 'list',    // rawlist?
            name: 'option',
            message: 'Welcome. What would you like to do?',
            choices: ['Add a game', 'Update a game', 'Delete a game', 'List all the games', 'Exit']
        });
}

const promiseCreateGame = (game) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'game',
                message: 'Name of the game: ',
                default: game,
            },
            {
                type: 'list',
                name: 'category',
                message: 'Choose a category for the game:',
                choices: ['Action', 'Adventure', 'FPS', 'MOBA', 'Role-Playing', 'Simulation', 'Strategy', 'Sports', 'Other']
            }
        ]);
}

const promiseSelectGame = (games) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'selectGame',
            message: 'Select a game:',
            choices: games,
        });
}

const promiseReadGame = () => {
    return new Promise(
        (res, rej) => {
            fs.readFile(
                path,
                'utf-8',
                (e, content) => {
                    if (e) {
                        rej(e);
                    } else {
                        res(content);
                    }
                }
            );
        }
    );
}

const promiseWriteToFile = (data) => {
    return new Promise(
        (res, rej) => {
            fs.writeFile(
                file,
                data,
                'utf-8',
                (e) => {
                    if (e) {
                        rej(e);
                    } else {
                        res();
                    }
                }
            );
        }
    );
}

function updateFile(list) {
    let updatedList = '';
    list.map(
        (valorActual, indiceActual) => {
            if (indiceActual < list.length - 1) {
                updatedList = updatedList + JSON.stringify(valorActual) + '\n';
            } else {
                updatedList = updatedList + JSON.stringify(valorActual);
            }

        }
    );
    return updatedList;
}

const promiseListAllGames = (list) => {
    return list.all()
}

