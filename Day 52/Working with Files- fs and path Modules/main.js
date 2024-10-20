const fs = require("fs")
// const fs = require("fs/promises")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("harry.txt", "harry is a good boy")

fs.writeFile("akash.txt", "akash is a good boy",()=>{
    console.log("done")
    fs.readFile("akash.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("harry.txt","harryrobooo",(e,d)=>{
    console.log(d)
})
console.log("ending")
