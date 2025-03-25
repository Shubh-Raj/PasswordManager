import { useState } from 'react'

import './App.css'
import './index.css'
import Navbar from './components.js/Navbar'
import Manager from './components.js/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Manager/>
    </>
  )
}

export default App
