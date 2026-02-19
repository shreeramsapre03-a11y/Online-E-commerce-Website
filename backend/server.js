import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express() 

app.use(cors())
app.use(express.json())

app.get("/route1",(req,res) => {
    res.send("This is the first route of my application");
});

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log(`The port is listening on http://localhost:${PORT}`)
})