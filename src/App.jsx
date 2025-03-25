import { useState } from 'react'

import './App.css'
import './index.css'
import Navbar from './components.js/Navbar'
import Manager from './components.js/Manager'
import Footer from './components.js/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='min-h-[87vh]'>
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
