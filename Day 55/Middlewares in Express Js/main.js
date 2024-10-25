const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.Akash = "I am Akash bhai";
    fs.appendFileSync("logo.txt",`${Date.now()}is a ${req.method}\n`)
    console.log(`${Date.now()}is a ${req.method}`)
    // res.send("Hacked Middleware 1")
    next()
  })

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.Akash = "I am harry bhai";
    next()
  })
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.Akash)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})