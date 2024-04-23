//^ operador exponencial

// let resultado = 2 ** 3

// let base = 5
// let exponente = 2
//  let resultado2 = base ** exponente
//  let resultado3 = 2 ** 3 ** 2
// console.log(resultado3)



//^INCLUDES--------
// const numero = [1, 2, 3,4 ,55 ,23]

// console.log(numero.includes(7)) //include vale para ver si un valor esta en una array
// console.log(numero.includes(23))

// const bebidas = ["cafe", "mate", "agua"]
// console.log(bebidas.includes("cafe"))


//^Operador "NULLISH" (??)
// const nombre = null;
// const nombrePorDefecto = "coderhouse";
// const nombreCompleto = nombre ?? nombrePorDefecto
// console.log(nombreCompleto);



//^Object.entries, Objetc.values, Objet.keys

// const persona = {
//     nombre: "coder",
//     edad : 30,
//     ciudad: "madrid"
// }

// const entradas = Object.entries(persona)
// console.log(entradas)

// const valores = Object.values(persona)
// console.log(valores)

// const claves = Object.keys(persona)
// console.log(claves)

// Restarting 'clase2/clase2.js'
// [ [ 'nombre', 'coder' ], [ 'edad', 30 ], [ 'ciudad', 'madrid' ] ]
// [ 'coder', 30, 'madrid' ]
// [ 'nombre', 'edad', 'ciudad' ]
// Completed running 'clase2/clase2.js'

//^FINALLY------

// function ejemploPromesa(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             const exito =true

//             if(exito){
//                 resolve("Éxito")

//             }else {
//                 reject("Error")
//             }
//         },5000)
//     })
// }

// ejemploPromesa()
//     .then((resultado)=>{
//         console.log(resultado)
//     })
//     .catch((error)=> {
//         console.log(error)
//     })
//     .finally(()=> {
//         console.log("La promesa ha sido finalizada")
//     })

// Restarting 'clase2/clase2.js' 
// Éxito
// La promesa ha sido finalizada
// Completed running 'clase2/clase2.js'


//^Spread Operator

// const number = [1, 2, 3]
// const nuevosnumbers = [...number, 4, 5]
// console.log(nuevosnumbers)


//^ACTIVIDAD

// !Descripción de la actividad. 
// Dados los objetos indicados en la siguiente diapositiva:
// Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
// Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

//PROFE
const tiposDeProductos = objetos.reduce((lista, objeto)=>{
    Object.keys(objeto).forEach(producto =>{
        if(!lista.includes(producto)){
            lista.push(producto)
        }
    })
    return lista
}, [])
console.log(tiposDeProductos)

const totalProductosVendidos = objetos.reduce((total, objeto)=>{
    const cantidades = Object.values(objeto)
    const suma= cantidades.reduce((a,b)=> a+b,0)
    return total + suma
},0)

console.log(`Total de productos vendidos ${totalProductosVendidos}`)




// MIOS
const objetosProductos = Object.entries(objetos)
console.log(objetosProductos)

const objetosProductosClave = Object.keys(objetos[0,1])
console.log(objetosProductosClave)
// const persona = {
//     nombre: "coder",
//     edad : 30,
//     ciudad: "madrid"
// }

// const entradas = Object.entries(persona)
// console.log(entradas)

// const valores = Object.values(persona)
// console.log(valores)

// const claves = Object.keys(persona)
// console.log(claves)

// Restarting 'clase2/clase2.js'
// [ [ 'nombre', 'coder' ], [ 'edad', 30 ], [ 'ciudad', 'madrid' ] ]
// [ 'coder', 30, 'madrid' ]
// [ 'nombre', 'edad', 'ciudad' ]
// Completed running 'clase2/clase2.js'

//? PROFE
//! Registrador de tickets de eventos
// ¿Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

// Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
// Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
// Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
// nombre
// lugar
// precio (deberá agregarse un 0.15 del valor original)
// capacidad (50 por defecto)
// fecha (hoy por defecto)
// El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío
// Debe contar con un método “agregarUsuario” El cual recibirá:
// id del evento (debe existir, agregar validaciones)
// id del usuario
// El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
// Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
// Debe contar con un método “ponerEventoEnGira” El cual recibirá:
// id del evento
// nueva localidad
// nueva fecha
// El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)

class TicketManager{
    constructor(){
        this.eventos = [],
        this.precioBaseDeGanancia =0
    }
    getEventos(){
        return this.eventos
    }
    agregarEventos(nombre, lugar, precio, capacidad = 50, fecha = new Date()){
        precio += precio * 0.15
        const evento_id = this.eventos.length + 1
        const participantes = []

        const evento = {
            id: evento_id,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }
        this.eventos.push(evento)
    }
    agregarUsuario(evento_id, usuario_id){
        const evento_encontrado = this.eventos.find((evento)=> evento.id === evento_id)
        if(!evento_encontrado){
            console.log("El id no corresponde")
            return 
        }
        const participantes = evento_encontrado.participantes
        const usuarioRegistrado = participantes.includes(usuario_id)
        if(usuarioRegistrado){
            console.log("El usuario ya esta registrado en este evento")
            return
        }
        participantes.push(usuario_id)
        console.log("El usuario ha sido agregado al evento")

    }

    ponerEventoEnGira(evento_id,nueva_localidad, nueva_fehca){
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id)
        if(!evento_encontrado){
            console.log("El evento con el ID proporcionado no existe")
            return
        }
        const evento_copiado= {...evento_encontrado}
        evento_copiado.id = this.eventos.lenght + 1
        evento_copiado.lugar = nueva_localidad
        evento_copiado.fecha = nueva_fehca
        evento_copiado.participantes = []

        this.eventos.push(evento_copiado)
        console.log("El evento ha sido puesto en gira correctamente")

    }
}
const ticketsManager = new TicketManager()

//Agregamos eventos
ticketsManager.agregarEventos("Concierto de rock", "Estadio Kempes", 100, 2000, new Date("2024-07-20"))
ticketsManager.agregarEventos("Concierto de pop", "Estadio Metropolitano", 200, 5000, new Date("2024-03-12"))

const eventos = ticketsManager.getEventos()
console.log(eventos)

//Agregar participantes
ticketsManager.agregarUsuario(1, "usuario 1")
ticketsManager.agregarUsuario(2, "usuario 2")
ticketsManager.agregarUsuario(1, "usuario 3")

//poner en gira
ticketsManager.ponerEventoEnGira(1, "Microestadio Talleres", new Date("2024-12-03"))
const eventosActualizados = ticketsManager.getEventos()
console.log(eventosActualizados)