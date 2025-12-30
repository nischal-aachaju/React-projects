import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id="right" className='flex overflow-x-auto gap-10 h-full w-2/3 p-3'> 
     {props.users.map(function(elems,idx){
      console.log(idx)
      return (  
        <>
          <RightCard key={idx} img={elems.img} color={elems.color} tags={elems.tags} idx={idx}/>
        </>
        
      )

     })}
    </div>
  )
}

export default RightContent
