import fs from 'fs';

export const saveDB = ( data ) => {
  const filePath = './db/data.json';
  
  fs.writeFileSync( filePath, JSON.stringify(data) );
}