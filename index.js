//1. importaciones
const express = require("express")

const app = express()

require("dotenv").config()

// 2. Middleware
app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

//3. Rutas
app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/players", (req, res) => {
    res.render("players")
})
app.get("/teams", (req, res) => {
    res.render("teams")
})

//4. Servidor
app.listen(process.env.PORT, () =>{
console.log(`Servidor activo en puerto ${process.env.PORT}`)
})