import React from 'react'
import Card from './components/card.jsx'
import users from './components/data.jsx';


const App = () => {
  return (

    <div className='parent'>
      {users.map(function (elems,idx) {
        
        return <Card key={idx} name={elems.username} img={elems.image} verified={elems.verified} bio={elems.bio} followers={elems.followers} collections={elems.collections}/>
  })}
    </div>
  )
}

export default App
