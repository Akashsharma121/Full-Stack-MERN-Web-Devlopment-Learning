let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
   document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})
button.addEventListener("contextmenu", ()=>{
   alert("Dont click here")
})

button.addEventListener("keydown", (e)=>{
   console.log(e.key, e.keyCode)
})