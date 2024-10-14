let a = prompt("Enter first number")

let b = prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)


function main(){

    let x = 1;
    try {
    console.log("The sum is", sum*x)
    return true
    
} catch (error) {
    console.log("Error aa gaya bhai")
    return false
}
finally{
    console.log("file are being closed and db conection being closed")
}
}
let c = main()