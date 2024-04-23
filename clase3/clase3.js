// //FUNCIONES

//^ARROW functions  //no hace falta return

//simple
// // const saludar = ()=>{
// //     console.log("saludar")
// // }
// // saludar()

//^Compuesta con parametros
// const sumar =(a,b) =>{
//     return a + b
// }
// console.log(sumar(2,5))

//^con una sola expresión
// const duplicar = (num) => num*2
// console.log(duplicar(5))


//^Arrow functions en un arreglo de objetos
// const usuarios = [
//     {nombre: "Alumno A", edad : 20},
//     {nombre: "Alumno B", edad : 40},
//     {nombre: "Alumno C", edad : 15}
// ]
// const nombres = usuarios.map(u => u.nombre)
// console.log(usuarios)

//^Arrow function como metodo de un objeto
// const persona ={
//     nombre: "Franco",
//     edad: 25,
//     saludar : ()=>{
//         console.log(`hola mi nombre es ${persona.nombre}`)
//     }
// }
// persona.saludar()



//^CALLBACKS..::: FUNCION QUE PODEMOAS PASAR COMO ARGUMENTO A OTRA FUNCION:::..
// function obtenerDatosUsuario(id, callback){ //callback es una funcion que la va utilizar la funcion obtenerDatosUsuario
//     setTimeout(() => {
//         const usua ={
//             id: id,
//             nombre: "coder",
//             email: "coder@gmail.ocm"
//         }
//         callback(usua)
//     }, 3000);
// }

// function mostrarDatosUsua(usua){
//     console.log(`Nombre: ${usua.nombre}, Email : ${usua.email}`)
// }
// obtenerDatosUsuario(12, mostrarDatosUsua)

//!El callback seria la respuesta a la tarea que se tenia que hacer en la clase 2

//Callback Hell  es el infierno de callbacks cuando se anidan funciones dentro de funcion, dentro de funcion,dentro de funcion.....

// //^Promises selucionan estos problemas con los callbacks
// //Tienen tres estados(pendiente, ejecutada, rechazada)
// //pending, fullfil, reject)
// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const exito = true
        
//         if(exito){
//             resolve("tarea ejecutada con exito")
//         }else {
//             reject("Ocurrio un error")
//         }
//     }, 3000);
// })
// promesa.then((mensaje)=> {
//     console.log("Exito", mensaje)
// }).catch((error)=>{
//     console.log("Error", error)
// }).finally(()=>{
//     console.log("Fianlly siempre se ejecuta. No tiene nada que ver con true or false")
// })

// //exito=true
// // estarting 'clase3/clase3.js'
// // Nombre: coder, Email : coder@gmail.ocm
// // Exito tarea ejecutada con exito
// // Completed running 'clase3/clase3.js'


// //Exito=flase
// // Restarting 'clase3/clase3.js'
// // Nombre: coder, Email : coder@gmail.ocm
// // Error Ocurrio un error
// // Completed running 'clase3/clase3.js'

console.log("hola")


//DE callbacks a promesas y de promesas a //^ASYNC/AWAY---------


//FUncoines flecha

//flecha (simple, con parametros y con arrays)

//ARROW FUNCTIONS

//Simple

/* const saludar = () => {
    console.log("Hola Backend developers")
}

saludar() */

/* const sumar = (a, b) => {
    return a + b
}

console.log(sumar(2, 3)) */

//Funciones con una sola expresion

/* const duplicar = (num) => num * 2

console.log(duplicar(5)) */

//Arrow functions en un arreglo de objetos

/* const usuarios = [
    { nombre: "Alumno A", edad: 20 },
    { nombre: "Alumno B", edad: 30 },
    { nombre: "Alumno C", edad: 50 }
]

const nombres = usuarios.map(u => u.nombre) */

//Arrow function como metodo de un objeto

/* const persona = {
    nombre: "Franco",
    edad: 25,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

persona.saludar() */

//!CALLBACK

// function obtenerDatosUsuario(id, callback) {
//     setTimeout(() => {
//         const usuario = {
//             id: id,
//             nombre: "Coder",
//             email: "coder@mail.com"
//         }
//         callback(usuario)
//     }, 5000);
// }

// function mostrarDatosDeUsuario(usuario) {
//     console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}`)
// }

// obtenerDatosUsuario(123, mostrarDatosDeUsuario) 


//^CallBack Hell Anidar funciones en funciones en funciones....

/* obtenerDatosUsuario(function(resultado1){
    procesarDatos(resultado1, function(resultado2){
        realidarOtraOperacion(resultado2, function(resultado3){

        })
    })
}) */

//!Promises
//Patrón para manejar funciones asincronas. De forma mas estructurada que los callbacks. Tres estados (pendiente, ejecutada, rechazada)


//  const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const exito = true

//         if (exito) {
//             resolve("tarea ejecutada con éxito")
//         } else {
//             reject("Ocurrió un error")
//         }
//     }, 2000);
// })

// promesa.then((mensaje) => {
//     console.log("Exito", mensaje)
// }).catch((error) => {
//     console.log("Error", error)
// }
// ) 

//!HANDS ON LABS

function suma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("Operación innecesaria")
        } else if (a + b < 0) {
            reject("La calculadora solo debe devolver valores positivos")
        } else {
            resolve(a + b)
        }
    })
}

function resta(minuendo, sustraendo) {
    return new Promise((resolve, reject) => {
        if (minuendo === 0 || sustraendo === 0) {
            reject("Operación inválida")
        } else if (minuendo - sustraendo < 0) {
            reject("La calculadora solo debe devolver valores positivos")
        } else {
            resolve(minuendo - sustraendo)
        }
    })
}

function multiplicacion(factor1, factor2) {
    return new Promise((resolve, reject) => {
        if (factor1 < 0 || factor2 < 0) {
            reject("La calculadora solo debe devolver valores positivos")
        } else {
            resolve(factor1 * factor2)
        }
    })
}

function division(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por cero")
        } else {
            resolve(dividendo / divisor)
        }
    })
}

// Función asincrona para realizar los cálculos
async function calculos() {
    try {

        const resultadoSuma = await suma(5, 7)
        console.log("Resultado suma", resultadoSuma)
        const resultadoResta = await resta(10, 3)
        console.log("Resultado resta", resultadoResta)
        const resultadoMultiplicacion = await multiplicacion(4, 0)
        console.log("Resultado multiplicacion", resultadoMultiplicacion)
        const resultadoDivision = await division(10, 0)
        console.log("Resultado división", resultadoDivision)

    } catch (error) {
        console.error("Error", error)
    }
}


//ejecutamos la funcion asincrona calculos()
calculos()
