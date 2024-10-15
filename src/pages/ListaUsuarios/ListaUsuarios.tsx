import React, { useEffect, useState } from 'react';
import { ListarUsuarios } from '../../services/ApiService';
import { Usuario } from '../../interfaces/usuario';
import { Link } from 'react-router-dom';

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
      <h2 className="text-3xl font-bold mb-4">Lista de Usuários</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-4">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b border-gray-700 py-4 flex justify-between text-left">
              <div>
                <p className="font-semibold">{user.nome}</p>
                <p>CPF: {user.cpf}</p>
                <p>Data de Nascimento: {user.dataNascimento}</p>
              </div>
              <span className={`text-sm ${user.ativo ? 'text-green-400' : 'text-red-400'}`}>
                {user.ativo ? 'Ativo' : 'Inativo'}
              </span>
            </li>
          ))
        ) : (
          <li className="text-center">Nenhum usuário cadastrado.</li>
        )}
      </ul>
      <Link to="/usuarios/cadastro">
        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition duration-300">
          Adicionar Usuário
        </button>
      </Link>
    </div>
  );
};

export default ListaUsuario;