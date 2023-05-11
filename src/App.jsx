import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'
import Texts from './components/Texts'
import ListItem from './components/ListItem';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const name = "Gio";
  
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
    </div>
  );
}

export default App;
