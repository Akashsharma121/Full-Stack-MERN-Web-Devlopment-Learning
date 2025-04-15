// "use client"
// import { useState, useEffect} from "react";
import fs from "fs/promises"
import Navbar from "@/component/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("hey I am akash")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})

  return (

      <div>
        <Navbar/>
        <div>I am component 
          {/* {count} */}
          </div>
        {/* <button onClick={()=>setCount(count + 1)}>Clik</button> */}
      </div>
  );
}
