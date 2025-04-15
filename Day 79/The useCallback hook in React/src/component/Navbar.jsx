import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective}) => {
    console.log("Navbar is renderd")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}></button>
    </div>
  )
}

export default memo(Navbar)
