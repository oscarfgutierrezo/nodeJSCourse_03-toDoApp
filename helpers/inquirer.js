// Importaciones de terceros
import inquirer from 'inquirer';
import colors from 'colors';


// Opciones del menú
const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: '1. Add task'
            },
            {
                value: '2',
                name: '2. Display tasks'
            },
            {
                value: '3',
                name: '3. Display finished tasks'
            },
            {
                value: '4',
                name: '4. Display unfinished tasks'
            },
            {
                value: '5',
                name: '5. Finish tasks'
            },
            {
                value: '6',
                name: '6. Remove tasks'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
]

// Mostrar menú principal al usuario
export const menu = async() => {
    console.clear();
    // Título
    console.log('========================'.green);
    console.log('    Select an option'.green);
    console.log('========================\n'.green);
    
    // Menú
    const { option } = await inquirer.prompt(questions);
    return option;

};

// Generar un mensaje de confirmación de la opción seleccionada antes de limpiar la consola
export const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'intro',
            message: `Press ${'ENTER'.green} to continue`,
        }
    ];

    console.log('\n');

    await inquirer.prompt(question);
}

// Solicitar input escrito al usuario
export const readInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ) {
                if( value.length === 0 ){
                    return 'Please enter a value'
                };
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);
    return description;
}