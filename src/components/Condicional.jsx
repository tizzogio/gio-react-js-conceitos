import { useState } from "react";

function Condicional(props){

  const [email, setEmail] = useState();
  const [usrEmail, setUsrEmail] = useState()

  function enviarEmail(e)
  {
    e.preventDefault();
    setUsrEmail(email);


    //alert(`Teste!!!`);

  }

  return (
    <div>

      <form >
        <div>
          <label htmlFor="email">Nome: </label>
          <input   
            type="email" 
            id="email" 
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}/>
            
        </div>
        <div>
          <button onClick={enviarEmail}>Enviar e-mail</button>
        </div>
      </form>

      {
        usrEmail && (
          <div>
            <p>
              O e-mail digitado foi: {usrEmail}
            </p>
          </div>
        )
      }


    </div>
    
    )
}

export default Condicional;