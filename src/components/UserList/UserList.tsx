import { Usuario } from "../../interfaces/usuario";
import { formatarCPF } from "../../utils/FormatarCpf";

interface UserListProps {
    users: Usuario[];
  }
  
  const UserList: React.FC<UserListProps> = ({ users }) => (
    <ul className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-4">
      {users.length > 0 ? (
        users.map((user) => (
          <li key={user.id} className="border-b border-gray-700 py-4 flex justify-between text-left">
            <div>
              <p className="font-semibold">{user.nome}</p>
              <p>CPF: {formatarCPF(user.cpf)}</p>
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
  );

export default UserList;
  