import React from 'react'
import { ArrowRight } from "lucide-react"
const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-8 left-8 h-8 w-8 bg-white rounded-full flex justify-center items-center font-400 font-mono text-2xl '>{props.idx+1}</div>
      <div className='absolute top-[55%] text-shadow-lg h-40 w-full p-8 text-white'> <p className=' leading-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia maiores voluptatum nemo nisi aliquam. </p></div>
      <div className='absolute bottom-6 flex gap-10  h-10 w-full px-10  text-white '>
        <button style={{backgroundColor:props.color}} className=' px-8 py-2 rounded-full'> {props.tags} </button>
        <button style={{backgroundColor:props.color}}  className='  rounded-full p-2'><ArrowRight /></button>
      </div>
    </div>
  )
}

export default RightCardContent
