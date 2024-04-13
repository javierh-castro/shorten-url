import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputShortener from './InputShortener.jsx'
import LinkResult from './LinkResult.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>  
     <InputShortener/>
     <LinkResult/>
     </div>
    </>
  )
}

export default App
