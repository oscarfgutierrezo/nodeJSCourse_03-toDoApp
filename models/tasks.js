// Importaciones de terceros
import colors from 'colors';
// Importaciones locales
import { Task } from "./task.js";

export class Tasks {
  _tasksList = {};

  constructor() {
    // Objeto para almacenar las tareas
    this._tasksList = {};
  }

  // Get permite enlazar una propiedad (array) con un valor dinamicamente calculado mediante la funcion asociada
  get buildArray() {
    // Crear un array que incluye cada una de las tareas del objeto _tasksList
    const array = [];
    Object.keys(this._tasksList).forEach( key => {
      const task = this._tasksList[key];
      array.push(task);
    });
    return array;
  }

  // Insertar tareas en el objeto _taskList siguiendo el formato requerido por la clase
  loadTasks( tasks = [] ){
    tasks.forEach( task => {
      this._tasksList[task.id] = task;
    });
  }

  // Agregar nueva tarea
  addTask( description = '' ) {
    // Instancia de la nueva tarea
    const task = new Task(description);
    // Agregar tarea al objeto -> La clave corresponde al indentificador único de la tarea
    this._tasksList[task.id] = task;
  }

  listTasks( filter = 'all') {
    // Crear linea antes del listado
    console.log();

    // Array de tareas según filtro
    let tasks
    switch (filter) {
      case 'all':
        tasks = this.buildArray;
        break;
      case 'finished':
        tasks = this.buildArray.filter( task => task.finishedDate );
        break;
      case 'unfinished':
        tasks = this.buildArray.filter( task => !task.finishedDate );
        break;
    }
    
    // Listado de tareas en consola con color según estado de finalización
    tasks.forEach( (task, i) => {
      const index = `${i + 1}.`.green;
      const { description, finishedDate } = task;
      const state = finishedDate ? finishedDate.green : 'Unfinished'.red;

      console.log(`${index} ${description} :: ${state}`);
    })
  }

  // Eliminar tarea del objeto de tareas
  deleteTask( id = '' ){
    if( this._tasksList[id] ){
      delete this._tasksList[id];
    }
  }
}