const express = require ('express')
const path = require("path")
const app = express()
const PORT = 8080

//importamos los routers
const petsRouter = require("./routes/pets.router.js")
const usersRouter = require("./routes/users.router.js")



//Estos son middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// el .use es el middlewares
app.use("/", petsRouter)
app.use("/", usersRouter)

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

