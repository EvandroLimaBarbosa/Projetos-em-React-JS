import React from 'react'

export default function Evento({numero}) {
    function meuEvento() {
        console.log(`Opa, Fui ativado! ${numero}`)
    }

  return (
    <div>
        <button onClick={meuEvento}>Numero {numero}</button>
    </div>
  )
}
