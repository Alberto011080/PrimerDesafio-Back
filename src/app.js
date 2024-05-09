
const express = require('express')
const app = express()
const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
    
})
//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//^Endpoints
//^Ejemplitos
// app.get('/', (req, res)=>{
//     res.json({
//         msg: "Get API"
//     })
// })
// app.post('/api', (req, res)=>{
//     res.json({
//         msg: "POST API"
//     })
// })
// app.put('/api', (req, res)=>{
//     res.json({
//         msg: "PUT API"
//     })
// })
// app.delete('/api', (req, res)=>{
//     res.json({
//         msg: "DELETE API"
//     })
// })


let tasks = [
    { id: 1, title: "Tarea 1" },
    { id: 2, title: "Tarea 2" },
    { id: 3, title: "Tarea 3" }
]


app.get('/tasks', (req, res) => { //primer parametro es la direccion y luego req y res)
    res.json(tasks)
    
})

app.get('/tasks/:id', (req, res) => { 
    const taskId = parseInt(req.params.id) //pasamos de numero a string
    const task = tasks.find((task) => task.id === taskId)
    if (task) {
        res.json(task)
    } else {
        res.status(404).json({ message: "Tarea no encontrada" })
    }
})


app.post('/tasks', (req, res) => {
    const { title } = req.body //desestructuramos el objeto y cogemos la inforamcion del body

    const newTask = { id: tasks.length + 1, title: title }
    tasks.push(newTask)
    res.status(201).json(tasks)

})

app.put('/tasks/:id', (req, res) => {   //el PUt necesita un Id y necesitamos que sea un string
    const taskId = parseInt(req.params.id)
    const task = tasks.find((task) => task.id === taskId)

    if (task) {
        const { title } = req.body
        task.title = title
        res.json(task)
    } else {
        res.status(404).json({ message: "Tarea no encontrado" })
    }
})

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    tasks = tasks.filter((task) => task.id !== taskId)
    res.json({ message: "Tarea eliminada correctamente" })
})

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })