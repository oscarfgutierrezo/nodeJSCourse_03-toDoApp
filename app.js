// Importaciones locales
import { menu, pause, readInput } from './helpers/inquirer.js';
import { readDB, saveDB } from './helpers/saveFile.js';
import { Tasks } from './models/tasks.js';

console.clear();

const app = async() => {
    let opt = ''

    // Intancia de las clase Tasks
    const tasks = new Tasks();

    // Ejecutar función si la data es diferente a null
    const tareasDB = readDB();

    if (tareasDB){
        // Establecer las tareas
    }
    await pause()
    
    // Mostrar el menú principal mientras la opción seleccionada sea diferente a "0"
    do {
        // Opción seleccionada por el usuario en el menú principal
        opt = await menu();

        // Manejo de las diferentes opciones del menú principal
        switch (opt) {
            // Agregar tarea
            case '1':
                // Respuesta ingresada por el usuario
                const description = await readInput('Task Description:');
                // Agregar tarea en objeto de tareas
                tasks.addTask(description);
                break;
            case '2':
                console.log( tasks.buildArray );
                break;
        }

        saveDB(tasks.buildArray)

        await pause()
    } while (opt !== '0');
    
}

app()  