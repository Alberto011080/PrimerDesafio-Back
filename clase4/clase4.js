
//Importando dependencias, librerias. FILESISTEM
//const fs = require('fs') // Solo se utiliza en funciones sincronas
const fs = require('fs').promises // ó   ('fs/promises') Para utilzacion de funciones con promesas


/* Nativamente vienen estas funciones:

readFileSync = lectura de un archivo en forma sincronica
writeFileSync = Escritura de un archivo de forma sincronica
appendFileSync = Actualizar un archivo de forma sincronica
unlinkFileSync = Borra un archivo de forma sincronica
mkdirSync = Creacion de un directorio
rmdirSync = Borrar directorio
*/

// const data = "Contenido para escribir en este archivo"

// try {
//     fs.writeFileSync('MiArchivo.txt', data) //recibe dos parametros (nombredelArchivo, data) Dentro de nombredelArchivo se inserta DATA
//     console.log("Archivo creado correctamente")
// } catch (error) {
//     console.error("Error al escribir el archivo", error)
// } 

// try {
//     const data = fs.readFileSync('MiArchivo.txt', 'utf8')//Dos parametros, el archivo a leer y el codigo que va a leer
//     console.log("Contenido a mostrar:  ", data)
// } catch (error) {
//     console.error("Error al leer el archivo", error)
// } 

// const masData = " Datos adicionales para agregar al texto del archivo"


// try {
//     fs.appendFileSync('MiArchivo.txt', masData) //utiliza el parametro de mi txt y le suma los nuevos datos de masData
//     console.log("Informacion agregada correctamente")
// } catch (error) {
//     console.error("Error al ejecutar la operacion", error)
// }

// try {
//     fs.unlinkSync('MiArchivo.txt')
//     console.log("Archivo eliminado correctamente")
// } catch (error) {
//     console.error("No se pudo eliminar el archivo", error)
// }

//Aqui un ejemplo con micarpeta que luego lo borramos un poquito mas abajo.
// try {
//     fs.mkdirSync('MiCarpeta')
//     console.log("Directorio creado correctamente")
// } catch (error) {
//     console.error("Error al crear directorio", error)
// } 


//  try {
//     fs.mkdirSync('MiCarpetona')
//     console.log("Directorio creado correctamente")
// } catch (error) {
//     console.error("Error al crear directorio", error)
// } 

//  try {
//     fs.rmdirSync('MiCarpetona')
//     console.log("Directorio eliminado correctamente")
// } catch (error) {
//     console.error("Error al crear directorio", error)
// } 

//^IMPLEMENTACION CON PROMESAS Y FUNCIONES ASINCRONAS



async function readFile() {
    try {
        const data = await fs.readFile('archivo.txt', () => {
            console.log("Contenido del archivo", data)
        })
    } catch (error) {
        console.error("Error al leer el archivo", error)
    }
}

readFile()

//CREAMOS EL ARCHIVO "archivo.txt"
async function writeFile() {
    const data = "Contenido del archivo"
    try {
        await fs.writeFile('archivo.txt', data)

    } catch (error) {
        console.error("Error al escribir el archivo", error)
    }
}

writeFile() 


async function appendFile() {
    const dataAdicional = " Datos adicionales para mi archivo"

    try {
        await fs.appendFile('archivo.txt', dataAdicional)
        console.log("Archivo actualizado correctamente")
    } catch (error) {
        console.error("Error al atcualizar", error)
    }
}

appendFile() 

console.log("hola")