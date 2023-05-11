function SayMyName(props){

  /*
      <></> - Tag vazia representa o react fragment.. só para simplificar, da o msm efeito de usar o DIV

   */

  return(
    <>
        <p>Usando a prop para falar o nome. E ai {props.name}</p>
    </>
  )
}

export default SayMyName;