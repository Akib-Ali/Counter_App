import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './Component/counter'
import { Navbar } from './Component/Navbar/Navbar'

function App() {
  

  return (
    <div className="Appi">
    <Navbar/>
<Counter/>
    </div>
  )
}

export default App
