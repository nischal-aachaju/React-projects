import React from 'react'
import NavBar from './navBar'
import Page1Content from './page1Content'
const section1 = (props) => {
  
  return (
    <div className='h-screen w-full bg-white-800'>
        <NavBar />
        <Page1Content users={props.users} />
      
    </div>
  )
}

export default section1
