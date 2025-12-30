import { CornerDownRight } from "lucide-react"
const navBar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18">
        <h4 className=" tracking-widest px-5 py-2 text-xs uppercase bg-[#0d0e0e] text-white rounded-full">target audience</h4>
      <button className="flex gap-2 font-bold tracking-widest bg-gray-200 text-xs uppercase px-5 py-2 rounded-full "><CornerDownRight size={16} strokeWidth={2.5} />digital banking platform</button>  
      
    </div>
  )
}

export default navBar
