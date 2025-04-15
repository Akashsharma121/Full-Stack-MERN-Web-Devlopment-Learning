import React from 'react'
import Script from 'next/script';

function about() {
  return (
    <div>
        <Script>
            {`alert("Welcome to about page")`}
        </Script>
      This is about
    </div>
  )
}

export default about

export const metadata = {
    title: "About Facebook - Contect with the world",
    description: "This is about Facebook and wwe connect with the world using Facebook",
  };

