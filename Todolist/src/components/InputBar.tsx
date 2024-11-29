import React from 'react'
import "./inputbar.css"

export default function InputBar() {
  return (
    <div className='inputBar'>
      <input type="text"  placeholder='Add a task ...' className='inputtask'/>
    </div>
  )
}
