
import Button from './Button'


function Evento({sinal}){

  function meuEvento(){
    alert(`Evento 1 disparadoooooo ${sinal}`)
  }

  function segundoEvento(){
    alert(`Segundo evento started`)
  }

  return(
      <div>
        <p>Clique aqui para disparar um evento</p>
        <Button event={meuEvento} text="Botão top" />
        <Button event={segundoEvento} text="Botão top segundo" />
        
      </div>
  )
}

export default Evento; 

// <button onClick={meuEvento}>Disparar</button>