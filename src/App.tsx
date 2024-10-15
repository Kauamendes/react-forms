import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ListaUsuarios from './pages/ListaUsuarios/ListaUsuarios';
import CadastroUsuarios from './pages/CadastraUsuarios/CadastroUsuario';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/usuarios/cadastro" element={<CadastroUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;