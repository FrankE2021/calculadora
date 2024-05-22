import React from 'react'
import logoEurekae from './images/logoEurekae.png'
import './App.css'
import Button from './components/Button'
import Screen from './components/Screen'
import ClearButton from './components/ClearButton'


function App() {
  return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img 
            src={logoEurekae}
            className='eurekae-logo'
            alt='Logo de Eurekae' />
        </div>

        <div className='contenedor-calculadora'>
          <Screen/>
          <div className='fila'>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className='fila'>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </div>
          <div className='fila'>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>*</Button>
          </div>
          <div className='fila'>
            <Button>=</Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button>/</Button>
          </div>
          <div className='fila'>
            <ClearButton>Clear</ClearButton>
          </div>
        </div>
      </div>
  )
}

export default App
