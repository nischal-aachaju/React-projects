import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const page1Content = (props) => {
  
  return (
    <div className='pb-20 pt-6 px-10  flex items-center h-[90vh] justify-between gap-10'>
        <LeftContent />
        <RightContent users={props.users} />

    </div>
  )
}

export default page1Content
