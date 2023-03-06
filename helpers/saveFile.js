import fs from 'fs';

// Path del archivo con la data
const filePath = './db/data.json';

// Crear archivo .json con la data
export const saveDB = ( data ) => {
  fs.writeFileSync( filePath, JSON.stringify(data) );
}

// Leer data
export const readDB = () => {
  // Validación de la existencia del archivo con la data
  if( !fs.existsSync(filePath) ){
    return null;
  }

  // Leer y convertir JSON en objeto de JS
  const info = fs.readFileSync( filePath, { encoding: 'utf-8'} );
  const data = JSON.parse(info);
  return data;
}