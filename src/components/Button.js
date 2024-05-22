import React from 'react'
import '../styles-sheets/Button.css'

function Button(props) {

	const esOperador = valor => {
		return isNaN(valor) && (valor != '.') && (valor != '=');
	}

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}>
      {props.children}
    </div>
  )
}

export default Button
