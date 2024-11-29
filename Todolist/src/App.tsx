import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import InputBar from './components/InputBar'
import Tasklist from './components/Tasklist'
import Pined from './components/Pined'

function App() {
   return (
    <>
    <div  className=' app'>
    <Header />
    <Slider/>
    <InputBar/>
    <Pined />
   
    <Tasklist />
    <Tasklist /><Tasklist /><Tasklist /><Tasklist /><Tasklist /><Tasklist />
    
    </div>
      
    </>
  )
}

export default App
