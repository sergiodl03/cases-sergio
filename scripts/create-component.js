import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// 1. Obtener la ruta actual (necesario porque usamos módulos de ES)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 2. Obtener el nombre del componente desde la terminal
// process.argv es un array: [0: node, 1: script, 2: argumento]
const componentName = process.argv[2];
// Validación: Si no ponen nombre, avisamos y salimos
if (!componentName) {
console.error('Por favor, indica el nombre del componente.');
console.error(' Ejemplo: npm run gen MiComponente');
process.exit(1);
}
// 3. Definir dónde vamos a crear el archivo
// Esto apunta a: tu-proyecto/src/components/Nombre.jsx
const componentDir = path.join(__dirname, '..', 'src', 'components');
const filePath = path.join(componentDir, `${componentName}.jsx`);
// 4. Crear la plantilla del código (Boilerplate)
// Aquí definimos qué contenido tendrá el archivo nuevo
const content = `import React from 'react';
function ${componentName}() {
return (
<div>
<h1 className="text-2xl font-bold">${componentName}</h1>
<p>Componente creado automáticamente</p>
</div>
);
}
export default ${componentName};
`;
// 5. Verificar si la carpeta components existe, si no, crearla
if (!fs.existsSync(componentDir)) {
fs.mkdirSync(componentDir, { recursive: true });
}
// 6. Verificar si el archivo ya existe para no sobrescribirlo
if (fs.existsSync(filePath)) {
console.error(` El componente ${componentName} ya existe.`);
process.exit(1);
}
// 7. Escribir el archivo
fs.writeFileSync(filePath, content);
console.log(` Componente creado con éxito:
src/components/${componentName}.jsx`);