import React from 'react'
import "../public/css/auth.css"
const DefaultLayout = ({children}) => {
  return (
    <div className='layout'>
         <div className="headerc">
            <h1>Resume Builder</h1>
         </div>
         <div className="content">
            {children}
         </div>
    </div>
  )
}

export default DefaultLayout