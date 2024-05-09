
import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let food = [
    {name: "Pizza", price: 150},
    {name: "Patatas", price: 100},
    {name: "empanadas", price: 200},
    {name: "Corqueta", price: 50},
    {name: "Ensalda", price: 150}

]


//configuracion handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))




//Ruta a la raiz
app.get('/', (req,res)=>{
    let testUser = {
        name: "coder",
        lastname: "house",
        role: "admin",  //se valida en la línea 42
    }
    res.render('index', {
        user: testUser,
        //css
        isAdmin: testUser.role === "admin",
        food
    })
})


let users = [];

app.post('/user', (req,res)=>{
    const {name, email, password} = req.body;
    const newUser = {name, email, password};
    users.push(newUser);
    res.send('Usuario registrado correctamente')

})

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/users', (req, res) => {
    res.send(users);
})


//llamada al puerto para ver si funciona
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
})