import React from 'react'
import  './Home.css'

const Home = () => {
  return (
    <div>
      {/* inline css*/}
   <h1 style={{color:'red',backgroundColor:'blue'}}> Internal css</h1>  
   <h2>External Css</h2>
      </div>
  )
}

export default Home