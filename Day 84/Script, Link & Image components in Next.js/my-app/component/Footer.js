import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <nav className="flex justify-around px-4 bg-slate-800 text-white py-4 text-xs">
    <div className="logo font-bold">Copyright @ Facebook | All rights reserved
    </div>
    <ul className='flex gap-6'>
       <Link href="/"><li>Home</li></Link>
       <Link href="/about"><li>About</li></Link>
       <Link href="/contact"><li>Contact</li></Link>
    </ul>
  </nav>
  )
}

export default Footer
