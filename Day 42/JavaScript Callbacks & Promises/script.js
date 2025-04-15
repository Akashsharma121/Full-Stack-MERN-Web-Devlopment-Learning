console.log("Akash is a hacker")
console.log("Rohan is a hecker")

setTimeout(() => {
    console.log("I am Inside setTimeout")
}, 0);

setTimeout(() => {
    console.log("I am Inside setTimeout 2")
}, 0);

console.log("The End")

const fn = () => {
    console.log("Nothing") 
  }

  const callback = (agr, fn) => {
    return () => {
      console.log(agr) // Move console.log inside the callback
      fn() 
    }
  }

  const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src; 
    sc.onload = callback("Akash", fn); 
    document.head.append(sc)
  }

  loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);