import { useState } from "react";

function Form(){

  const [name, setName] = useState("Gio");
  const [psw, setPsw] = useState("123");

  function enviarForm(e){
    e.preventDefault();

    alert(`Salvar dados ${name} e ${psw}`);
    
  }

  return(
      <div>
          <h1>Meu cadastro</h1>
          <form onSubmit={enviarForm}>
            <div>
              <label htmlFor="name">Nome: </label>
              <input 
                type="text" 
                id="name" 
                placeholder="Digite seu user"
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="psw">Senha: </label>
              <input 
                type="text" 
                id="psw" 
                placeholder="Digite sua senha" 
                onChange={(e) => setPsw(e.target.value)}/>
            </div>
            <div>
              <input type="submit" value="Cadastrar"/>
            </div>
          </form>
      </div>
  )
}

export default Form;