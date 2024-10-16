import React from 'react';
import LinkComponent from '../../components/Link/LinkComponent';
import Title from '../../components/Title/TitleComponent';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <Title level='h1' text='Bem-vindo à Página Inicial' className='mb-8' bold />
      <nav className="flex flex-col gap-4">
        <LinkComponent to='/usuarios' text='Listar usuários' className=''/>
        <LinkComponent to='/usuarios/cadastro' text='Cadastrar usuários' className=''/>
      </nav>
    </div>
  );
};

export default Home;