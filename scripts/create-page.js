import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// 1. Obtener la ruta actual (necesario porque usamos módulos de ES)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 2. Obtener el nombre del componente desde la terminal
// process.argv es un array: [0: node, 1: script, 2: argumento]
const pageName = process.argv[2];
// Validación: Si no ponen nombre, avisamos y salimos
if (!pageName) {
console.error('Por favor, indica el nombre de la pagina.');
console.error(' Ejemplo: npm run page MiPagina');
process.exit(1);
}
// 3. Definir dónde vamos a crear el archivo
// Esto apunta a: tu-proyecto/src/components/Nombre.jsx
const pageDir = path.join(__dirname, '..', 'src', 'pages');
const filePath = path.join(pageDir, `${pageName}.jsx`);
// 4. Crear la plantilla del código (Boilerplate)
// Aquí definimos qué contenido tendrá el archivo nuevo
const content = `import React from 'react';
function ${pageName}() {
return (
<div>
<h1 className="text-2xl font-bold">${pageName}</h1>
<p>Pagina creado automáticamente</p>
</div>
);
}
export default ${pageName};
`;
// 5. Verificar si la carpeta components existe, si no, crearla
if (!fs.existsSync(pageDir)) {
fs.mkdirSync(pageDir, { recursive: true });
}
// 6. Verificar si el archivo ya existe para no sobrescribirlo
if (fs.existsSync(filePath)) {
console.error(` La pagina ${pageName} ya existe.`);
process.exit(1);
}
// 7. Escribir el archivo
fs.writeFileSync(filePath, content);
console.log(` Pagina creado con éxito:
src/pages/${pageName}.jsx`);