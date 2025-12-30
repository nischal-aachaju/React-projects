import React from 'react'
import { ArrowUpRight } from 'lucide-react' 
const heroText = () => {
  return (
    <div className='flex justify-around h-full  flex-col'>
      <div className='px-8 '>
        <h3 className='text-[#0d0e0e] mb-7 leading-[1.1] text-5xl font-bold'>Prospective <br /> <span className='text-blue-500'>Customer</span> <br /> Segmentation</h3>
        <p className='text-xl w-[90%]
         font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, aperiam pariatur? Amet non dolore, maxime reiciendis nostrum facilis ipsa ad delectus quis consectetur suscipit fugit! Ad voluptate esse numquam quos sequi? Cumque.</p>
      </div>
      <div className='px-8'><ArrowUpRight size={50} strokeWidth={2.5}/></div>
    </div>
  )
}
export default heroText
