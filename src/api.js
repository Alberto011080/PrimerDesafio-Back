//!Ejercicio para clase..... ppt de la clase7


const express = require('express')
const api = express()
const PORT = 6060

api.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})
api.use(express.json())
api.use(express.urlencoded({ extended: true }))

let frase = "Frase inicial";
let frases = [
    {id: 1, frase: "Frase inicial"},
    {id: 2, frase: "Frase secundaria"},
    {id: 3, frase: "Frase terciaria"}
]



api.get('/api/frases', (req, res)=>{
    res.json(frases)
})

api.get('/api/frases/:id', (req, res)=>{
    const fraseId = parseInt(req.params.id)
    let fraseNueva = frases.find((f)=>f.id === fraseId)
    if(fraseNueva){
    res.json(fraseNueva)
    }else{
        res.status(404).json({ message: "Tarea no encontrada"})
    }
})

api.post('/api/frases', (req,res)=>{
    const { frase } = req.body
    const newFrase = { id: frases.length +1, frase: frase }
    frases.push(newFrase)
    res.status(201).json(frases)
})

api.put('/api/frases/:id', (req,res)=>{
    const fraseId = parseInt(req.params.id)
    const fraseNueva = frases.find((f)=>f.id === fraseId) 

    if(fraseNueva){
        const { frase } = req.body
        fraseNueva.frase =  frase 
        res.json(frase)

    }else{
        res.status(500).json({message: "No se pudo realizar el cambio"})
    }
})

api.delete('/api/frases/:id', (req,res)=>{
    const fraseId = parseInt(req.params.id)
    frases = frases.filter((frase) => frase.id !== fraseId)
    res.json({message: "Mensaje borrado correctamente"})
})