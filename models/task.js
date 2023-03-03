import { v4 as uuidv4 } from 'uuid';

export class Task {
  id = '';
  description= '';
  finishedDate = null;

  constructor( description ) {
    // Identificador único para la tarea
    this.id = uuidv4();
    // Descripción ingresada por el usuario
    this.description = description;
    // Fecha de finalización de la tarea
    this.finishedDate = null
  }
}