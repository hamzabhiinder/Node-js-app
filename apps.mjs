import express from 'express'
const app = express()
const port = process.env.port ||3000

app.get('/', (req, res) => {
    console.log('Some request are action',req.ip)
  res.send('Hello my name is Ameer Hamza Here')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})