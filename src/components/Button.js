import React from 'react'
import '../styles-sheets/Button.css'

function Button(props) {

	const esOperador = valor => {
		return isNaN(valor) && (valor !== '.') && (valor !== '=');
	}

  return (
    <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()} onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </button>
  )
}

export default Button
