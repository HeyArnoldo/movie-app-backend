const express = require("express")
const cors = require("cors")
const app = express()
const logger = require("./middleware/logger")
const error404 = require("./404.js")
const moviesRouter = require("./routes/movies")

const port = 5000

app.use(logger)
app.use(cors())
app.use(express.json())

app.use("/api/movies",moviesRouter)
app.use(error404)


app.listen(port, () => {
    console.log("Server Running!","localhost:"+port)
})