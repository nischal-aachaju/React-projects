import React from 'react'

import RightCardContent from './RightCardContent'
const RightCatd = (props) => {
  return (
    <div className='scroll-smooth h-full w-1/3 shrink-0 overflow-hidden relative bg-amber-400 rounded-4xl'>
      <img className=' h-full w-full object-cover' src={props.img} alt="image" />
      <RightCardContent tags={props.tags} color={props.color} idx={props.idx}/>
    </div>
  )
}

export default RightCatd
