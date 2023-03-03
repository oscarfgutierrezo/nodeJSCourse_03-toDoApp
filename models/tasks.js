import { Task } from "./task.js";

export class Tasks {
  _tasksList = {};

  constructor() {
    // Objeto para almacenar las tareas
    this._tasksList = {};
  }

  // Método agregar tarea
  addTask( description = '' ) {
    // Instancia de la nueva tarea
    const task = new Task(description);
    // Agregar tarea al objeto -> La clave corresponde al indentificador único de la tarea
    this._tasksList[task.id] = task;
  }
}