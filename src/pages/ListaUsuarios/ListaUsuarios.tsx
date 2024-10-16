import React, { useEffect, useState } from 'react';
import { ListarUsuarios } from '../../services/ApiService';
import { Usuario } from '../../interfaces/usuario';
import Title from '../../components/Title/TitleComponent';
import ErrorMessage from '../../components/Error/ErrorMessage';
import Button from '../../components/Button/Button';
import UserList from '../../components/UserList/UserList';
import LinkComponent from '../../components/Link/LinkComponent';

const ListaUsuario: React.FC = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await ListarUsuarios();
      setUsers(response.data);
    } catch (error) {
      setError('Erro ao listar usuários.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-white">Carregando usuários...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <Title level='h2' text='Lista de Usuários' className='mb-4' bold />
      {error && <ErrorMessage message={error} />}
      <UserList users={users} />
      <LinkComponent to='/usuarios/cadastro' text="Adicionar Usuário" className="mt-4"/>
    </div>
  );
};

export default ListaUsuario;