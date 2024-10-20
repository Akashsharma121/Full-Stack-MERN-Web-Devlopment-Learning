import fs from "fs/promises"

let a = await fs.readFile("akash.txt")

let b = await fs.appendFile("akash.txt","\n\n\n\n\n this is amazing promise")

console.log(a.toString(),b)