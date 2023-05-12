import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Examples from "./pages/AppAllExamples";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/empresas" element={<Empresa/>} />
          <Route path="/contatos" element={<Contato/>} />
          <Route path="/exemplos" element={<Examples/>} />
      </Routes>
      <Footer/>

      </Router>

    </>
 
  );
}

export default App;