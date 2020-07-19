const inquirer = require('inquirer');
const fs = require('fs');

const file = './game-category.txt';
let validator = true;

const promiseOptions = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
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
            },
            {
                type: 'list',
                name: 'completed',
                message: 'Have you completed this game?',
                choices: ['Yes', 'No']
            },
            {
                type: 'list',
                name: 'recommended',
                message: 'Do you recommend this game?',
                choices: ['Yes', 'No']
            },
            {
                type: 'input',
                name: 'hoursPlayed',
                message: 'How many hours have you played this game?',
                defualt: '0'
            }
        ]);
}

const promiseSelectGame = (games) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'game',
            message: 'Select a game:',
            choices: games,
        });
}

const promiseReadGames = () => {
    return new Promise(
        (res, rej) => {
            fs.readFile(
                file,
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
        (val, ind) => {
            if (ind < list.length - 1) {
                updatedList = updatedList + JSON.stringify(val) + '\n';
            } else {
                updatedList = updatedList + JSON.stringify(val);
            }
        }
    );
    return updatedList;
}

const promiseListAllGames = (list) => {
    let allGames = '';
    list.map(
        (val, ind) => {
            if (ind < list.length - 1) {
                allGames = allGames + JSON.stringify(val) + '\n';
            } else {
                allGames = allGames + JSON.stringify(val);
            }
        }
    );
    return allGames;
}

// Función principal
async function gameCRUD() {
    try {
        while (validator) {
            const resReadGames = await promiseReadGames();
            let gameList = [];
            
            if (resReadGames !== '') {
                gameList = resReadGames.split('\n').map(
                    val => {
                        return JSON.parse(val);
                    }
                );
            }
            const resOption = await promiseOptions();
            switch (resOption.option) {

                case 'Add a game':
                    const resAddGame = await promiseCreateGame();
                    if (resReadGames !== '') {
                        await promiseWriteToFile(resReadGames + '\n' + JSON.stringify(resAddGame));
                    } else {
                        await promiseWriteToFile(JSON.stringify(resAddGame));
                    }
                    console.log('Game registered succesfully');
                    break;

                case 'Update a game':
                    if (gameList.length === 0) {
                        console.log('No registered games yet');
                    } else {
                        const resUpdateGame = await promiseSelectGame(gameList.map(
                            val => {
                                return val.game;
                            }
                        ));
                        gameList[gameList.findIndex(
                            val => {
                                return val.game === resUpdateGame.game;
                            }
                        )] = await promiseCreateGame(resUpdateGame.game);
                        await promiseWriteToFile(updateFile(gameList));
                    }
                    console.log('Game updated');
                    break;

                case 'Delete a game':
                    if (gameList.length === 0) {
                        console.log('No registered games');
                    } else {
                        const resDelete = await promiseSelectGame(gameList.map(
                            val => {
                                return val.game;
                            }
                        ));
                        gameList.splice(gameList.findIndex(
                            val => {
                                return val.game === resDelete.game;
                            }
                        ), 1);
                        await promiseWriteToFile(updateFile(gameList));
                    }
                    console.log('Game Deleted');
                    break;

                case 'List all the games':
                    const resListAllGames = await promiseListAllGames(gameList);
                    console.table(resListAllGames);
                    break;

                case 'Exit':
                    validator = false;
                    console.log('Bye!');
                    break;
            }
        }
    } catch (e) {
        console.error('Error: ', e);
    }
}

gameCRUD();