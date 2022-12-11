const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static("public/build/"))
app.use(express.static("public/"))
app.use(express.static("public/dist"))

app.listen(PORT, () => {
    console.log(`Serving http://localhost:${PORT}`)
})