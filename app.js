// Importaciones de terceros
require('colors');
// Importaciones locales
const clearConsole = require('./helpers/clearConsole');
const { displayMenu } = require('./helpers/messages');

clearConsole()

const app = async() => {
    displayMenu();
}

app()