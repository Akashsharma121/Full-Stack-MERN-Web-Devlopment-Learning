import React, {useEffect} from 'react'

const Navbar = ({color}) => {
   // Case:1 Run on every render
   useEffect(() => {
    alert("Hey i will run on every render")
  })
  
  // Case:2 Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page.. This is the first render")
  }, [])

  // Example of  Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page.. This is the first render of app.jsx")

    return()=>{
      alert("content was unmounted")
    }
  }, [])
  
  // Case:3 Run only when certain values change
  useEffect(() => {
    alert("Hey i am running because color was changed")
  }, [color])

  return (
    <div>
      I am a Navbar of {color} color hehe....
    </div>
  )
}

export default Navbar
