import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor:color}}>
        {/* <h1>potato</h1> */}
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>

            <buttton onClick = {() => setColor("red")}
            className = 'outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: "red"}}> Red</buttton>

            <buttton onClick = {() => setColor("Blue")}
            className = 'outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: "blue"}}> Blue</buttton>

            <buttton onClick = {() => setColor("Black")}
            className = 'outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: "black"}}> Black</buttton>

            <buttton onClick = {() => setColor("Green")}
             className = 'outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: "green"}}> Green</buttton>

            <buttton onClick = {() => setColor("Olive")}
            className = 'outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: "olive"}}> Olive</buttton>
            
          </div>
        </div>

    </div>
    
  )
}

export default App
