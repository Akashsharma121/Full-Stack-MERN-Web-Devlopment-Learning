let a = 5;

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    console.log(c)
}

    function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number.length; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(factorial(a))