console.log("Hello world")


/*Hello world
document.body
<body>​<div class=​"container">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​</div>​<script src=​"script.js">​</script>​</body>​
document.body.childnodes
undefined
document.body.childNodes
NodeList(5) [text, div.container, text, script, text]
document.body.childNodes[0]
#text
document.body.childNodes[1]
<div class=​"container">​…​</div>​
document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
left cont = document.body.childNodes[1]
VM809:1 Uncaught SyntaxError: Unexpected identifier 'cont'Understand this error
let cont = document.body.childNodes[1]
undefined
cont
<div class=​"container">​…​</div>​
cont.firstchild
undefined
document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
let cont = document.body.childNodes[1]
undefined
cont
<div class=​"container">​…​</div>​
cont.firstChild
#text
cont.lastChild
#text
cont.firstElementChild
<div class=​"box">​Box1​</div>​
cont.lastElementChild
<div class=​"box">​Box5​</div>​
cont.firstElementChild.style.color = "red"
'red'
cont.firstElementChild.style.backgroundColor = "red"
'red'
cont.lastElementChild.style.backgroundColor = "green"
'green'
cont.firstElementChild.style.color = "blue"

'blue'
cont.firstElementChild.parentElement
<div class=​"container">​…​</div>
Hello world
document.body.firstElementChild
<div class=​"container">​…​</div>​
document.body.firstElementChild.childNodes
NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[0]
<div class=​"box">​Box1​</div>​
document.body.firstElementChild.children[1]
<div class=​"box">​Box2​</div>​
document.body.firstElementChild.children[2]
<div class=​"box">​Box3​</div>​
document.body.firstElementChild.children[2].nextElementSibling
<div class=​"box">​Box4​</div>​
document.body.firstElementChild.children[2].previousElementSibling
<div class=​"box">​Box2​</div>​
document.body.firstElementChild.children[2].previousSibling
#text
document.body.firstElementChild.children[2].parentElement
<div class=​"container">​…​</div>​
Hello world
document.body.firstElementChild.children[2].parentElement
<div class=​"container">​…​</div>​
document.body.children
HTMLCollection(3) [div.container, table, script]
document.body.children[1]
<table>​…​</table>​
document.body.children[1].rows
HTMLCollection(2) [tr, tr]
document.body.children[1].column 
undefined
document.body.children[1].caption
null
document.body.children[1],HTMLHeadElement
ƒ HTMLHeadElement() { [native code] }
document.body.children[1].tablefloat
undefined
document.body.children[1].tablefoot
undefined
document.body.children[1].tablebodies
undefined
document.body.children[1].SelectionRowindex
undefined
document.body.children[1].callIndex
undefined
document.body.children[1].nextElementSibling
<script src=​"script.js">​</script>​
​*/