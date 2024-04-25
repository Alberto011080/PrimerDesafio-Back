const ManagerUsuarios = require('./managerUsuarios.js')

const manager = new ManagerUsuarios()

//Creamos un nuevo usuario
manager.crearUsuario({
    Nombre: "Pablo",
    Apellido: "Gimenez",
    Edad: 38,
    Curso: "Programación Backend"
})
    

//Consultar usuarios

manager.consultarUsuarios()
.then(usuarios => console.log('Usuarios', usuarios))
.catch(error => console.error("Erro al consultar usuarios", error))