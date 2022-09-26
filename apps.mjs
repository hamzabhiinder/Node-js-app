import express from 'express'
import cors from "cors";
const app = express()
const port = process.env.port ||3000

app.use(express.json())
app.use(cors())


let todos=[]


app.get('/del', (req, res) => {
 
  todos=[]
})
app.get('/todos', (req, res) => {
 
  res.send({
    messages:"Your data Message ",
    data: todos
  })
})
app.post('/todo', (req, res) => {
  todos.push(req.body.text)  
  res.send({
    messages:"Your Message has Send",
    data: todos
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

