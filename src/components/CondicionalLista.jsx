

function CondicionalLista({itens}){


  function retornarcar(item)
  {
    console.log(item)
  }


  return(
    <>
      <h3>Meus novos carros</h3>

      {
        itens.length > 0 ? 
        (
          itens.map((item, index) => (
            <p key={index}>{item}</p>
          )) 
        ):( <p>Lista</p>)

         /*itens.map(function(item){
          return <p>{item}</p>
         })*/

        
      }
        
    </>
  )
}

export default CondicionalLista;