import React from 'react'
import '../styles-sheets/ClearButton.css'

const ClearButton=(props)=> {

  return (
    <div className='clear-button' 
    onClick={props.manejarClear}>
      {props.children}
    </div>
  )
}

export default ClearButton
