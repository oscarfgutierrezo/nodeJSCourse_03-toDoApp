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
      array.push(task)
    });
    return array;
  }

  // Insertar tareas en el objeto _taskList siguiendo el formato requerido por la clase
  loadTasks( tasks = [] ){
    tasks.forEach( task => {
      this._tasksList[task.id] = task;
    })
  }

  // Método agregar tarea
  addTask( description = '' ) {
    // Instancia de la nueva tarea
    const task = new Task(description);
    // Agregar tarea al objeto -> La clave corresponde al indentificador único de la tarea
    this._tasksList[task.id] = task;
  }
}