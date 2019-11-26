const express = require("express")
const app = express()

//rotas
const index = require("./routes/index")
const alunas = require("./routes/alunasRoute")
const professoras = require("./routes/professorasRoute")
const sessions = require("./routes/sessionRoute")


app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)
app.use("/sessions", sessions)

module.exports = app
