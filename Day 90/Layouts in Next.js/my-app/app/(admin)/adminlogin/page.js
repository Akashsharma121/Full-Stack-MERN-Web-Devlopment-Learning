import React from 'react'

const page = () => {
  return (
    <div>
      Admin page 
      <p>Feel like a Pro</p>
    </div>
  )
}

export default page

// or Dynamic metadata
export async function generateMetadata({ params }) {
  console.log(params)
  return {
    title: 'Admin Login: Facebook - Connet with friends and the world around you on Facebook',
  }
}
