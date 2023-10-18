const express = require('express')
const cors=require("cors")

require("dotenv").config()
require("./config/connect")

const app = express()

//config
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// GET /api/roles
// GET /api/roles/:id
app.use("/api", require("./routes/api"))

const PORT= process.env.PORT || 2999
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})