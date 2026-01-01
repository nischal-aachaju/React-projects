import React, { useState } from 'react'

const App = () => {


  const [Title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [Task, setTask] = useState([])
  const [Alert, setAlert] = useState("")
  function delete_note(idx) {
    console.log("note deleted ",idx)
    const copyTask=[...Task]
    copyTask.splice(idx,1)
    setTask(copyTask)

  }
  return (
    <div className='h-full w-full absolute  bg-[#0d0e0e]  text-[#fff3f3]'>
      <form onSubmit={(e) => {
        e.preventDefault()
        const copyTask = [...Task]
        copyTask.push({ Title, Details })
        if (Title.trim()) {
          if (Title.length > 24) {
            setAlert("Heading is too long")
            setTimeout(() => setAlert(""), 500)
          }
          else {
            setTask(copyTask)
            setTitle("")
            setDetails("")
          }

        }
        else {

          setAlert("Heading is empty")
          setTimeout(() => setAlert(""), 500)
        }


      }} className=' w-full flex  p-10 flex-col gap-5 '>
        <input value={Title} onChange={(e) => {
          setTitle(e.target.value)
        }
        } className=' max-w-2xl px-5 py-2 border-2 rounded'
          type="text"
          placeholder='Enter Notes Heading' />
        <textarea value={Details} name="" id="" onChange={(e) => {
          setDetails(e.target.value)
        }} className='max-w-2xl px-5 py-2  border-2 rounded' type="text" placeholder="Enter details" ></textarea>
        <button className='max-w-2xl
        active:bg-gray-300 active:scale-[0.99]
        bg-[#fff3f3] text-[#0d0e0e] rounded px-5 py-2'>Add Note</button>
      </form>
      {/* <h1>{Empty}</h1> */}
      <div className='flex flex-wrap  m-10 gap-10'>
        {Task.map(function (elems, idx) {
          return (
            <div key={idx}>
              <div className=" h-86 w-60 p-4 relative  shrink-0 bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] rounded text-[#0d0e0e]">
                <h2 className='underline absolute top-11 left-[50%] translate-[-50%]  py-2 text-center font-bold w-54 wrap-break-word'>{elems.Title}</h2>
                <p id='details_text' className=' absolute top-14 left-3 scroll-smooth mx-2 my-2  h-60 w-50  overflow-y-scroll wrap-break-word'>{elems.Details}</p>
                <button onClick={() => {
                  delete_note(idx)
                }} className="
          absolute
          cursor-pointer
          bottom-3
          left-18
          h-6
          w-20
          rounded-full
          text-xs
          font-medium
          text-[#f52d2d]
          bg-transparent
          backdrop-blur-md
          border
          border-black/5
          shadow-sm
          shadow-black/10
          hover:backdrop-blur-lg
          active:scale-90
          transition-all
          duration-200 ">Delete
                </button>

              </div>
            </div>
          )
        })}

      </div>

      <h1 className={` absolute top-2 left-10 text-red-500 transition-all duration-100 ease-in-out
    ${Alert ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
  `}>{Alert}</h1>

    </div>
  )
}

export default App
