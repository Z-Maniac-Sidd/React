import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  // let counter = 5

  const addValue = () => {
    // counter = counter+1
    if(counter<20){
    setCounter(counter+1)
    console.log("clicked", counter);
    }
    else{
      alert('cannot increas beyond 20')
    }
  }

  const substractValue = () => {
    if(counter>0){
      setCounter(counter -1)
      console.log("clicked", counter);
    }
    else{
      
      alert('cannot decrease below 0')
    }
    
  }

  return (
    <>
    <h1>sidd and code</h1>
    <h2>counter value : {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={substractValue}>substract value</button>
    {/* <p>footer {counter}</p> */}
    </>
  )
}

export default App
