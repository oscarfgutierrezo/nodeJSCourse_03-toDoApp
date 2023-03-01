// Importaciones de terceros
require('colors');
// Importaciones locales
const clearConsole = require('./clearConsole');

const displayMenu = () => {
    clearConsole();
    // Título
    console.log('========================'.green);
    console.log('    Select an option'.green);
    console.log('========================\n'.green);
};

module.exports = {
    displayMenu
}
