
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('sales').insertMany([{
    "Name": "Java",
    "Price": "20000",
    "Instructor": "Akash"
  },
  {
    "Name": "Python",
    "Price": "18000",
    "Instructor": "Rohit"
  },
  {
    "Name": "JavaScript",
    "Price": "22000",
    "Instructor": "Priya"
  },
  {
    "Name": "C++",
    "Price": "19000",
    "Instructor": "Karan"
  },
  {
    "Name": "HTML & CSS",
    "Price": "15000",
    "Instructor": "Neha"
  },
  {
    "Name": "React",
    "Price": "25000",
    "Instructor": "Vikas"
  },
  {
    "Name": "Angular",
    "Price": "24000",
    "Instructor": "Pooja"
  },
  {
    "Name": "Node.js",
    "Price": "23000",
    "Instructor": "Sumit"
  },
  {
    "Name": "C",
    "Price": "17000",
    "Instructor": "Raj"
  },
  {
    "Name": "PHP",
    "Price": "16000",
    "Instructor": "Manish"
  }
  ]);

// Print a message to the output window.
console.log(`Done Inserting Data`);
