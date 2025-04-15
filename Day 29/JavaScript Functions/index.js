function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your study is good!")

}
function sum(a, b, c = 3) {
    //   console.log(a + b)
    console.log(a, b, c)
    return a + b + c

}

result1 = sum(4, 6)
result2 = sum(4, 3)
result3 = sum(4, 8, 1)

console.log("The sum of thise number is...", result1)
console.log("The sum of thise number is...", result2)
console.log("The sum of thise number is...", result3)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(33);
func1(30);
func1(32);