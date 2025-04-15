// CRUD Operations
use("Crud1Db")

// CREATE
db.createCollection("courses")

db.courses.insertOne({
    name:"Akash web dev free course",
    price: 0,
    assignments: 45,
    projects: 32
})

db.courses.insertMany([
    {
        "name": "Akash web dev free course",
        "price": 0,
        "assignments": 45,
        "projects": 32
      },
      {
        "name": "Python for Beginners",
        "price": 0,
        "assignments": 30,
        "projects": 20
      },
      {
        "name": "Full Stack JavaScript",
        "price": 0,
        "assignments": 50,
        "projects": 35
      },
      {
        "name": "React and Redux Crash Course",
        "price": 0,
        "assignments": 25,
        "projects": 18
      },
      {
        "name": "C++ Programming Masterclass",
        "price": 0,
        "assignments": 40,
        "projects": 28
      },
      {
        "name": "Data Structures in Java",
        "price": 0,
        "assignments": 38,
        "projects": 25
      },
      {
        "name": "Machine Learning with Python",
        "price": 0,
        "assignments": 60,
        "projects": 40
      },
      {
        "name": "Angular Web Development",
        "price": 0,
        "assignments": 35,
        "projects": 22
      },
      {
        "name": "HTML & CSS Mastery",
        "price": 0,
        "assignments": 20,
        "projects": 15
      },
      {
        "name": "Node.js Backend Development",
        "price": 0,
        "assignments": 42,
        "projects": 30
      }      
])


// READ
// let a = db.courses.find({price:0})
// console.log(a.toArray())

let b = db.courses.findOne({price:0})
console.log(b)

// UPDATE
// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 0}, {$set:{price: 1000}})



// DELETE
db.courses.deleteOne({price: 1000})

db.courses.deleteMany({price: 1000})
// https://www.mongodb.com/docs/manual/reference/operator/query/eq/#examples