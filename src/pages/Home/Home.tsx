import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo à Página Inicial</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/usuarios">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition duration-300">
            Listar Usuários
          </button>
        </Link>
        <Link to="/usuarios/cadastro">
          <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded transition duration-300">
            Adicionar Usuário
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;