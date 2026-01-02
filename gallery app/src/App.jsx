import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  function onNext() {
    setPage(page + 1)
    setUserData([])
  }
  function onPrev() {
    if (page>1){

      setPage(page - 1)
      setUserData([])
    }
  }
 
  const [page, setPage] = useState(1)
  const [userData, setUserData] = useState([])
 
  const getData = (async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page+5}&limit=10`)

    setUserData(response.data)
  })
  useEffect(() => {
    getData()
  }, [page])
  let printUserData = <div className='h-screen w-full flex justify-center items-center'><h3 className='text-gray-500 text-xl '>Loading.......</h3></div>
  if (userData.length > 0) {
    printUserData = userData.map((elems, idx) => {
      return (
        <a key={idx} target='_blank' href={elems.url}>
          <div className='h-68 w-60  object-cover overflow-hidden rounded-2xl  bg-amber-50'>
            <img className='h-[90%] w-full ' src={elems.download_url} alt="" />
            <h2 className=' text-black text-xs text-center py-2'><span className='font-bold'>Author:</span> {elems.author}</h2>
          </div>
        </a>

      )
    })
  }

  return (
    <div className='h-full w-full bg-black text-white'>
      <div className='h-fit flex flex-wrap justify-center gap-6 p-10'>
        {printUserData}
      </div>
      <div  className='h-22 bg-black flex  gap-10 justify-center items-center  '>
        
        
        <button style={{opacity: page == 1? 0.7 : 1,}} className='bg-orange-400 h-11 w-22 rounded cursor-pointer active:scale-96 '
          onClick={() => {
            onPrev()
          }}
        >Prev</button>
        <p> Page {page}</p>
        <button className='bg-orange-400 h-11 w-22 rounded cursor-pointer active:scale-96'
          onClick={() => {
            onNext()
          }}
        >Next</button>
      
        

      </div>
    </div>
  )
}

export default App
