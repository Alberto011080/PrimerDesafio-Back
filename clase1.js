// //^FUNDAMENTOS DE JAVA SCRIPT--------------->

// //Tipos de datos de JAVA (String, number, booleano, object)

// //Tipos de funciones
// function miFuncion(parametro1, parametro2){
//      return parametro1 + parametro2
// }
// miFuncion(2,4);
// console.log(miFuncion(2,4));

// //Arreglos o ARRAYS
// let numbers =[2, 5, 3, 6 ,3]
// numbers.forEach(function(num){
//     console.log(num*2)
// })
// console.log(numbers);

// //Scope o ámbito de una variable
//  const student_name = "coderhouse";
//  function greet (){
//     console.log("hola " + student_name);
    
//  }
//  console.log(student_name);
//  greet();

//  //CLOUSURE--------NUEVO CONCEPTO
//  /*
//  Caracteristicas de js que permite a una fucción acceder y recordar el ámbito léxico en el que fue creado

//  */

//  function counter(){
//     let contador = 0;
    
//     function increase(){
//         contador++

//         console.log(contador)
//     }
//     return increase
//  }
//  let myCounter = counter()
//  myCounter()



//  //Template strings
//  const student_back_name = "jared"
//  const age = 25
//  const message = `${student_back_name} tiene ${age} años`;
//  console.log(message);


//  //CLASES ó CLASS
//  //Las clases son moldes. En base a ese molde creas objetos. Las clases dan determinades caracteristicas o ATRIBUTOS seguidos de un valor o METODOS.
// //Atributos = CARACTERISTICAS
// //METODOS = ACCIONES QUE REALIZA

// class ClassName{
//     //constructor de clases
//     constructor(parametros){

//     }
//     //atributo
//     coderStudent 


//     //metodo
//     metodo1(){

//     }

// }

//     class Persona{
//         constructor(nombre, edad){
//             this.nombre = nombre
//             this.edad = edad
//         }
//         //metodo
//         saludar(){
//             console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)

//         }
//     }


// let persona1 = new Persona ("coder", 25);
// persona1.saludar()
// console.log(persona1);


//HANDS ON LAB
//DESAFIO
//LOS METODOS SON FUNCIONES


class Contador {
    static cuentaGlobal = 0

    constructor(responsable){
        this.responsable = responsable
        this.cuentaIndividual = 0
    }
    obtenerResponsable(){
        return this.responsable
    }
    obtenerCuentaIndividual(){
        return this.cuentaIndividual
    }
    static obtenerCuentaGlobal(){
        return Contador.cuentaGlobal
    }
    contar(){
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }

}
const contador1 = new Contador("Persona1")
console.log(contador1.obtenerResponsable())

contador1.contar()
contador1.contar()
contador1.contar()

console.log(Contador.obtenerCuentaGlobal())
//
