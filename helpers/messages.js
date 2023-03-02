// Importaciones de Node
const readline = require('readline')
// Importaciones de terceros
require('colors');
// Importaciones locales
const clearConsole = require('./clearConsole');

const displayMenu = () => {
    
    return new Promise( resolve => {
        clearConsole();
        // Título
        console.log('========================'.green);
        console.log('    Select an option'.green);
        console.log('========================\n'.green);
    
        // Menú
        console.log(`${ '1.'.green } Create task`);
        console.log(`${ '2.'.green } Display tasks`);
        console.log(`${ '3.'.green } Display finished tasks`);
        console.log(`${ '4.'.green } Display unfinished tasks`);
        console.log(`${ '5.'.green } Finish tasks`);
        console.log(`${ '6.'.green } Remove task`);
        console.log(`${ '0.'.green } Exit\n`);
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question('Select an option: ', (opt) => {
            resolve(opt);
            rl.close();
        });
    });
};



const pause = () => {
    return new Promise( resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question(`\nPress ${'ENTER'.green} to continue\n`, (opt) => {
            rl.close();
            resolve();
        });
    });
};



module.exports = {
    displayMenu,
    pause
}



