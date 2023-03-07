// Importaciones locales
import { confirmationMessage, menu, pause, readInput, tasksListRemove } from './helpers/inquirer.js';
import { readDB, saveDB } from './helpers/saveFile.js';
import { Tasks } from './models/tasks.js';

console.clear();

const app = async() => {
    let opt = ''

    // Intancia de las clase Tasks
    const tasks = new Tasks();

    // Ejecutar método loadTasks si la data es diferente a null
    const tareasDB = readDB();
    if (tareasDB){
        tasks.loadTasks(tareasDB)
    };
    
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
                console.log('\nTask successfully added');
                break;
            // Listar todas las tareas
            case '2':
                tasks.listTasks('all');
                break;
            // Listar las tareas terminadas
            case '3':
                tasks.listTasks('finished');
                break;
            // Listar las tareas no terminadas
            case '4':
                tasks.listTasks('unfinished');
                break;
            // Borrar tarea
            case '6':
                // Id de la tarea seleccionada por el usuario
                const id = await tasksListRemove(tasks.buildArray);
                if( id !== '0' ) {
                    // Eliminar tarea si hay confirmación del usuario
                    const ok = await confirmationMessage('Do you want to delete this task?');
                    if( ok ){
                        tasks.deleteTask( id )
                        console.log('\nTask successfully removed');
                    }
                };
                break;
        }

        // Guardar tareas en archivo .json
        saveDB(tasks.buildArray)

        // Mensaje de confirmación de la opción seleccionada
        await pause()
    } while (opt !== '0');
}

app();  