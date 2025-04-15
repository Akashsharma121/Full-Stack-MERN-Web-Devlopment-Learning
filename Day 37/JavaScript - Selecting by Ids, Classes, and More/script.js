console.log("Akash")

// let boxes = document.getElementsByClassName("box")
//  console.log(boxes)

//  boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green";
})

/*
Akash
script.js:11 NodeList(6) [div.box, div.box, div#redbox.box, div.box, div.box, div.box]0: div.box1: div.box2: div#redbox.box3: div.box4: div.box5: div.boxlength: 6[[Prototype]]: NodeList
document.getElementsByName("div")
NodeList []
document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
e = document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
e[3].matches("redbox")
false
e[3].matches("#redbox")
true
e[3].closest("redbox")
null
e[3].closest(".container")
<div class=​"container">​…​</div>​
e[3].closest("html")
<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
document.querySelector("container").contains(e[2])
VM2569:1 Uncaught TypeError: Cannot read properties of null (reading 'contains')
    at <anonymous>:1:36
(anonymous) @ VM2569:1Understand this error
document.querySelector(".container").contains(e[2])
true
document.querySelector(".container").contains(e[4])
true
document.querySelector(".container").contains(e[0])
true
document.querySelector(".container").contains(document.querySelector("body"))
false
document.querySelector("body").contains(document.querySelector(".container"))
true
*/