import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotherElement = (
  <a href = "https://google.com" target='_blank'>visit google</a>
)

const another_user = "global variable bule"

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  another_user
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactElement/>
)

// createRoot(document.getElementById('root')).render(
  
//     ReactElement
  
// )

