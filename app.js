// Importaciones de terceros
require('colors');
// Importaciones locales
const clearConsole = require('./helpers/clearConsole');
const { displayMenu, pause } = require('./helpers/messages');

clearConsole()

const app = async() => {
    let opt = ''
    
    do {
        opt = await displayMenu();
        if ( opt !== '0') await pause();
    } while (opt !== '0');
    
}

app()