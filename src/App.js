import React from 'react'
import logoEurekae from './images/logoEurekae.png'
import './App.css'
import Button from './components/Button'
import Screen from './components/Screen'
import ClearButton from './components/ClearButton'
import { useState } from 'react'
import {evaluate} from 'mathjs'


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => { 
    if (input){
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese algun valor.');
    };

  } 
    

  return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img 
            src={logoEurekae}
            className='eurekae-logo'
            alt='Logo de Eurekae' />
        </div>

        <div className='contenedor-calculadora'>
          <Screen input={input} />
          <div className='fila'>
            <Button manejarClick={agregarInput}>1</Button>
            <Button manejarClick={agregarInput}>2</Button>
            <Button manejarClick={agregarInput}>3</Button>
            <Button manejarClick={agregarInput}>+</Button>
          </div>
          <div className='fila'>
            <Button manejarClick={agregarInput}>4</Button>
            <Button manejarClick={agregarInput}>5</Button>
            <Button manejarClick={agregarInput}>6</Button>
            <Button manejarClick={agregarInput}>-</Button>
          </div>
          <div className='fila'>
            <Button manejarClick={agregarInput}>7</Button>
            <Button manejarClick={agregarInput}>8</Button>
            <Button manejarClick={agregarInput}>9</Button>
            <Button manejarClick={agregarInput}>*</Button>
          </div>
          <div className='fila'>
            <Button manejarClick={calcularResultado}>=</Button>
            <Button manejarClick={agregarInput}>0</Button>
            <Button manejarClick={agregarInput}>.</Button>
            <Button manejarClick={agregarInput}>/</Button>
          </div>
          <div className='fila'>
            <ClearButton manejarClear={()=>setInput('')}>Clear</ClearButton>
          </div>
        </div>
      </div>
  )
}

export default App
