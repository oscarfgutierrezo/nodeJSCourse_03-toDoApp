// Importaciones de terceros
import inquirer from 'inquirer';
import colors from 'colors';
// Importaciones locales
import { clearConsole } from './clearConsole.js';


// Opciones del menú
const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]


export const inquirerMenu = async() => {
    clearConsole();
    // Título
    console.log('========================'.green);
    console.log('    Select an option'.green);
    console.log('========================\n'.green);
    
    // Menú
    const opt = await inquirer.prompt(questions)
    return opt

}