const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom =  (arr)=>{
    let rno  = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
})

app.get('/generate', async (req, res) => {
    // Clear the collection employee
   await Employee.deleteMany({})
    // Generate Random Data

    let randomNames = ["rohan", "mohan", "amit", "sohan"]
    let randomLang = ["python", "js", "java", "c++"]
    let randomCities = ["kolkata", "bombay", "delhi", "noida"]
    for (let index = 0; index < 10; index++) {
     let e = await Employee.create({
                name: getRandom(randomNames),
                salary: Math.floor(Math.random() * 22000),
                language: getRandom(randomLang),
                city: getRandom(randomCities),
                isManager: (Math.random() > 0.5) ? true : false
        })
        console.log(e)
        
    }
    res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})