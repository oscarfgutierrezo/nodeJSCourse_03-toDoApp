// Importaciones locales
import { clearConsole } from './helpers/clearConsole.js';
import { inquirerMenu } from './helpers/inquirer.js';

clearConsole()

const app = async() => {
    let opt = ''
    
    do {
        opt = await inquirerMenu();
    } while (opt !== '0');
    
}

app()  