function Pessoa({name, photo, age}){

  /*

      <img src={props.photo} alt={props.name} />
      <p>Name {props.name}</p>
      <p>Profissão {props.age}</p>

      Para não precisar fazer isso de ficar repetindo props, propos, props...
      posso criar direo as props como um objeto {} e consumir os valores com os nomes "fazendo destructing"

  */

  return(
    <div>
        <img src={photo} alt={name} />
        <p>Nome {name}</p>
        <p>Idade {age}</p>
    </div>
  )
}

export default Pessoa;