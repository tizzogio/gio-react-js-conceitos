import '../App.css';
import HelloWorld from '../components/HelloWorld'
import SayMyName from '../components/SayMyName'
import Pessoa from '../components/Pessoa'
import List from '../components/List'
import Texts from '../components/Texts'
import ListItem from '../components/ListItem';
import Evento from '../components/Evento';
import Form from '../components/Form';
import Condicional from '../components/Condicional';
import CondicionalLista from '../components/CondicionalLista';
import { useState } from 'react';
import SeuNome from '../components/SeuNome';
import Saudacao from '../components/Saudacao';

function Examples() {

  const name = "Gio";
  const myList = ['BMW Z1', 'Mercedez GLA 200', 'Fiat Uno' ]
  const EmptyList = []
  const [nome, setNome] = useState();

  
  return (

    <div className="App">
      <h1>React {name} v0</h1>
      <HelloWorld />
      <SayMyName name={name} />
      <Pessoa 
        name="Gio" 
        photo="https://via.placeholder.com/150" 
        age="31" />


      <Texts text='Meus carros' />
      <ListItem brand="Ferrari F40" year={2023}/>
      <ListItem brand="Audi TT" year={2022}/>
      <ListItem /> 

      <Evento sinal={"!!!!!"}/>

      <Form />

      <div>
        <Condicional/>
      </div> 

      <CondicionalLista itens={myList} />

      <CondicionalLista itens={EmptyList} />

      {/* State lift tenho um componente que altera e um que usa*/} 
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      {nome}
      
    </div>
  );
}

export default Examples;

/*

      <h1>React {name} v0</h1>
      <HelloWorld />
      <SayMyName name={name} />
      <Pessoa 
        name="Gio" 
        photo="https://via.placeholder.com/150" 
        age="31" />


      <Texts text='Meus carros' />
      <ListItem brand="Ferrari F40" year={2023}/>
      <ListItem brand="Audi TT" year={2022}/>
      <ListItem /> 

      <Evento sinal={"!!!!!"}/>

      <Form />

      <div>
        <Condicional/>
      </div>

*/