console.log("Hello I am conditional totorial")

let age = 1;
// let grace = 7;

// age = grace
// console.log(age )
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if (age==18){
    console.log("You can drive");
}

else if (age == 0){
    console.log("Are you kidding")
}

else if (age == 1){
    console.log("Are you again kidding")
}

else{
    console.log("You can not drive");
}

a = 4;
b = 8;
let c = a > b ? (a - b) : (b - a)

/*
translate to:
if (a>b){
      let c = a - b;
}
else{
  let c = b - a;
}

*/